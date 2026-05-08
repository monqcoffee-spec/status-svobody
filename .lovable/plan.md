# План редизайна сайта «Статус Свободы»

Полный редизайн в dark luxury / premium fintech стиле с винной палитрой, переработкой структуры одностраничника и добавлением отдельной страницы «Банкротство».

## 1. Дизайн-система (src/styles.css)

Заменить текущую gold/cyan палитру на винную:
- `--wine-carmine: #9A0D1B` — основной акцент
- `--wine-rosewood: #6A040F` — secondary
- `--wine-cosmos: #550816`
- `--wine-bean: #350616`
- `--wine-purple: #1D0515` — фон
- `--ink-deep: #0A0308` — ультра-тёмный
- `--silver: warm ivory`, `--silver-dim`

Переименовать утилиты: `--cyan*` токены остаются как алиасы → указывают на новые wine-токены (чтобы не ломать существующие классы `text-cyan`, `border-cyan/30` и т.п.). Никакого поиск/замены по компонентам — просто перенаправить семантику токена.

Обновить:
- `bg-aurora` — wine radial glow вместо cyan
- `btn-cyan` → wine glow button
- `ring-glow`, `text-glow`, `text-gradient-cyan` → винные

Шрифты: добавить **Manrope** как основной display + sans, оставить Inter как fallback. Cormorant убрать или использовать только для акцентных цитат.

Light theme: усилить контраст, но проект явно dark-first — оставить light как secondary.

## 2. Структура одностраничника (`src/routes/index.tsx`)

**Удалить полностью:**
- Свежие дела (Practice)
- Команда (Team)
- Освобождение (если есть)
- Контроль (если есть)
- Cases.tsx, Testimonials.tsx (если устаревшие — ревью)

**Финальная структура секций:**
1. **Hero** — «Статус Свободы Юлии Арминой», cinematic wine background, портрет Юлии (из user-uploads IMG_1870.png), 2 CTA, glass overlay, particle field
2. **About** — короткий абзац + premium quote-card «Если ваша задача решается проще — скажем об этом на первой встрече бесплатно», слева портрет
3. **Digital Profile** — отдельный cinematic section с анимированным сетевым фоном
4. **Services** — 6 premium glass cards (Оспаривание БКИ, Коррекция КИ, Финансовая защита, Сопровождение банкротства, Юр. консалтинг, Защита репутации)
5. **Pricing** — 3 тарифа: ЭКСПРЕСС-КОРРЕКЦИЯ / КОМПЛЕКСНОЕ РЕШЕНИЕ / ПРЕМИУМ-ЗАЩИТА
6. **FAQ** — accordion (5 вопросов из ТЗ)
7. **Contacts / Lead form** — имя, телефон, Telegram, комментарий
8. **Final CTA**

Шапка: добавить ссылку на `/bankruptcy` (отдельная страница).

Floating button «вверх» — компонент `ScrollTopButton`.

## 3. Страница «Банкротство» (`src/routes/bankruptcy.tsx`)

Новая отдельная route с собственным `head()` (title/description/og).
Секции:
- Hero (cinematic, эмоциональный)
- Преимущества
- Этапы работы
- Сопровождение
- Результаты
- **Bot Intensive** — premium block с glass card, red glow, кнопки «Перейти в бот» / «Получить интенсив»
- FAQ (банкротство-специфичный)
- Lead form

## 4. Активы

- Скопировать `user-uploads://IMG_1870.png` → `src/assets/yulia-armina.png` (портрет в hero/about)
- Логотип уже есть, добавить premium glow + animated shine через CSS (filter + keyframe)

## 5. Компоненты (новые / переработанные)

- `src/components/site/Hero.tsx` — переработка
- `src/components/site/DigitalProfile.tsx` — новый cinematic block с анимированной сеткой
- `src/components/site/Services.tsx` — 6 wine glass cards
- `src/components/site/Pricing.tsx` — 3 тарифа
- `src/components/site/Faq.tsx` — accordion
- `src/components/site/ScrollTopButton.tsx` — floating button
- `src/components/site/BotIntensive.tsx` — premium telegram block (для /bankruptcy)
- Обновить `SiteHeader`, `SiteFooter`, `Logo` (glow shine)

**Удалить:** `Team.tsx`, `Cases.tsx` (если используются), портреты команды из `src/assets/team/`.

## 6. SEO

- Index route head(): title «Статус Свободы — премиальный финансово-юридический консалтинг», meta description, og:title/description/image (портрет Юлии)
- Bankruptcy route head(): отдельные title/description/og
- JSON-LD LegalService на index

## 7. Анимации

Уже есть keyframes (reveal, drift, float, pulse-glow). Добавить:
- `@keyframes shine` — для логотипа и CTA (movable gradient highlight)
- `@keyframes wine-pulse` — для glow accents
- Параллакс на hero через `transform: translateY(scrollY * 0.3)` в effect
- Smooth scroll: `html { scroll-behavior: smooth }` уже на месте

## Технические детали

- Стек проекта — TanStack Start + Vite + Tailwind v4 (НЕ Next.js, как просит пользователь — объясню в финальном сообщении что используем уже подключённый стек, который функционально эквивалентен)
- Framer Motion: проверить, установлен ли; если нет — `bun add framer-motion`
- Lead form уже подключён к Supabase через `LeadFormDialog` — переиспользую
- Логотип `src/assets/status-svobody-logo.png` — без фона, использую как есть, добавлю CSS glow

## Порядок работ

1. Скопировать портрет Юлии в assets
2. Переписать `src/styles.css` (палитра + новые анимации)
3. Создать новые компоненты секций
4. Переписать `src/routes/index.tsx`
5. Создать `src/routes/bankruptcy.tsx`
6. Обновить `SiteHeader` (ссылка на /bankruptcy), `SiteFooter`, `Logo`
7. Удалить `Team.tsx`, `Cases.tsx`, портреты команды
8. SEO + JSON-LD
9. Проверка превью в обеих темах, мобильный viewport

## Что НЕ делаем без подтверждения

- Не меняем backend / Supabase схему
- Не трогаем edge functions
- Не добавляем новые секреты

Подтвердите план — приступаю к реализации.
