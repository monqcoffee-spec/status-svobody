# Аудит сайта «Статус свободы Юлии Арминой»

## A. Безопасность бэкенда (приоритет — критично)

### A1. CRITICAL — RLS-политики

**lead_requests** (имена/телефоны/email/долги)
- Есть только INSERT-политика. Любой авторизованный пользователь может читать ВСЕ заявки (включая контакты других людей).
- **Фикс:** добавить SELECT-политику только для admin-роли.

**ai_consultations** (стенограммы AI-диалогов)
- Нет SELECT-политики → любой авторизованный читает все стенограммы.
- UPDATE-политика разрешает всем (включая anon) править любую запись младше 1 часа.
- **Фикс:** SELECT только для admin; UPDATE привязать к session-токену записи.

### A2. CRITICAL — Server functions без авторизации

**`src/server/consultations.functions.ts` → `submitLeadWithConsultation`**
- Использует `supabaseAdmin` (bypass RLS), не проверяет владельца `consultationId` → IDOR: можно привязать чужую консультацию к своей заявке.
- **Фикс:** генерировать `session_token` при `saveConsultation`, сохранять в записи, требовать его при `submitLeadWithConsultation`.

**`src/server/consultations.functions.ts` → `saveConsultation`**
- Без auth, без rate-limit, пишет до 80 КБ через service-role.
- **Фикс:** добавить rate-limit по IP (in-memory или таблица `rate_limits`), вернуть `session_token` клиенту.

**`src/server/leads.functions.ts` → `submitLead`**
- Использует `supabaseAdmin` без необходимости.
- **Фикс:** добавить INSERT-политику для anon на `lead_requests` и перейти на обычный `supabase`-клиент.

### A3. CRITICAL — Edge function `ai-diagnose`

- `CORS: *`, без JWT, тратит `LOVABLE_API_KEY` на любых вызовах из интернета.
- **Фикс:** ограничить CORS доменом сайта; либо удалить функцию, если она больше не используется (проверю — в проекте есть `lib/ai-gateway.ts`).

### A4. HIGH — `_authenticated.tsx`

- Защита через `useEffect` без `beforeLoad`. SSR может вернуть HTML кабинета анонимам.
- **Фикс:** добавить `beforeLoad` с `supabase.auth.getUser()` и `redirect('/login')`.

### A5. WARN — Leaked Password Protection

- Отключена. **Фикс:** включить HIBP-проверку.

### A6. WARN — Permissive RLS

- Два предупреждения о `USING (true)` — это политики на профили/публичные данные, посмотрю по контексту.

---

## B. SEO и метатеги

- `src/routes/__root.tsx` — root-меты OK (title/desc/og).
- `src/routes/bankruptcy.tsx` — head() есть, проверю наличие og:title/description/image (страница с собственным контентом — обязательны).
- `src/routes/login.tsx` и `signup.tsx` — только `title`, нет description / og. Добавлю.
- Нет `<link rel="canonical">` ни на одной странице.
- Нет `robots.txt` и `sitemap.xml`.
- JSON-LD `LegalService` — проверю на index.

---

## C. UX и адаптивность

- На мобильной (392px) уже исправил heading на `/bankruptcy`. Пройдусь скриншотами по `/`, `/bankruptcy`, `/login` — проверю overflow, читаемость, тапабельность кнопок (≥44px), порядок секций.
- Floating contacts перекрывает CTA на мобильной (по скриншоту видно).

---

## D. Код и производительность

- `Cases.tsx`, `Team.tsx` упомянуты в плане как «удалить», но `Testimonials.tsx` остался — проверю используется ли.
- Дубли `bot.png`, `IconArt`, неиспользуемые ассеты.
- Console: только vite reconnect warning — не критично.
- `supabase/functions/ai-diagnose` дублирует логику с `src/lib/ai-gateway.ts` — кандидат на удаление.

---

## Порядок выполнения (3 волны)

### Волна 1 — безопасные быстрые фиксы (без риска регрессий)
1. `_authenticated.tsx` → добавить `beforeLoad` server-side guard.
2. Enable Leaked Password Protection.
3. SEO: добавить description/og на `login`, `signup`; проверить og на `bankruptcy`; добавить `canonical` через root head; создать `public/robots.txt`.
4. Мобильные overflow-фиксы по скриншотам.

### Волна 2 — RLS и роли (миграция БД)
5. Создать `app_role` enum, `user_roles` table, `has_role()` SECURITY DEFINER функцию.
6. Добавить SELECT-политику `lead_requests` (admin-only).
7. Добавить INSERT-политику `lead_requests` для anon, перевести `submitLead` на обычный клиент.
8. Добавить SELECT-политику `ai_consultations` (admin-only).
9. Добавить колонку `ai_consultations.session_token uuid`; UPDATE-политика — по совпадению токена.

### Волна 3 — server functions и edge
10. `saveConsultation` → возвращать `session_token`, простой in-memory rate-limit по IP.
11. `submitLeadWithConsultation` → требовать `session_token`, проверять совпадение перед UPDATE.
12. `ai-diagnose` edge: либо удалить (если не используется), либо ограничить CORS и добавить rate-limit.
13. Чистка неиспользуемых компонентов/ассетов.

---

## Что НЕ трогаем

- Дизайн-токены, темы, текущий UI компонентов — не меняем без отдельного запроса.
- Backend-схемы существующих таблиц (только добавление политик/колонок).
- Логика AI-консультанта — сохраняем поведение, только закрываем дыры.

После подтверждения начну с Волны 1 (минимальный риск, максимум защиты сразу).
