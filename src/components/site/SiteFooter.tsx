import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-cream">
      <div className="container-tight grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl">Юлия Армина</div>
          <p className="mt-3 max-w-md text-sm text-cream/70">
            Финансовый управляющий, член СРО «Созидание». Веду процедуры банкротства физлиц
            напрямую — без посредников. Помогаю восстановить кредитную историю после
            процедуры.
          </p>

          <div className="mt-6 space-y-1 text-sm text-cream/70">
            <div>
              ИП Армина Юлия Юрьевна · ИНН{" "}
              <span className="tabular text-cream">312300900561</span>
            </div>
            <div>
              ОГРНИП <span className="tabular text-cream">324774600450864</span>
            </div>
            <div>
              Реестр АУ № <span className="tabular text-cream">20068</span> от 17.11.2020
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-cream/50">Навигация</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-gold">
                Обо мне
              </Link>
            </li>
            <li>
              <Link to="/services/bankruptcy" className="hover:text-gold">
                Банкротство физлиц
              </Link>
            </li>
            <li>
              <Link to="/services/credit-history" className="hover:text-gold">
                Восстановление КИ
              </Link>
            </li>
            <li>
              <Link to="/intensive" className="hover:text-gold">
                Интенсив «Статус свободы»
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:text-gold">
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-cream/50">Контакты</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="text-cream/80">г. Москва, Цветной бульвар, 13</li>
            <li>
              <a href="tel:+79654457378" className="tabular hover:text-gold">
                +7 (965) 445-73-78
              </a>
            </li>
            <li>
              <a
                href="https://t.me/status_svobody_bot"
                target="_blank"
                rel="noopener"
                className="hover:text-gold"
              >
                @status_svobody_bot
              </a>
            </li>
            <li>
              <a
                href="https://t.me/zakon_127"
                target="_blank"
                rel="noopener"
                className="hover:text-gold"
              >
                Канал · @zakon_127
              </a>
            </li>
          </ul>

          <div className="mt-6 space-y-2 text-xs">
            <a
              href="https://fedresurs.ru/"
              target="_blank"
              rel="noopener"
              className="block text-gold hover:underline"
            >
              → Профиль на Федресурсе
            </a>
            <a
              href="https://sozidanie-sro.ru/"
              target="_blank"
              rel="noopener"
              className="block text-gold hover:underline"
            >
              → Карточка СРО «Созидание»
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-tight flex flex-col gap-2 py-6 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Юлия Армина. Все данные открыты и проверяемы.</div>
          <div>
            Сайт носит информационный характер и не является публичной офертой.
          </div>
        </div>
      </div>
    </footer>
  );
}