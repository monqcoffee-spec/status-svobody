import volkov from "@/assets/team/aleksandr-volkov.png";
import morozova from "@/assets/team/elena-morozova.png";
import sidorov from "@/assets/team/dmitry-sidorov.png";
import kuznetsova from "@/assets/team/olga-kuznetsova.png";

type Member = {
  photo: string;
  name: string;
  role: string;
  quote: string;
};

const MEMBERS: Member[] = [
  {
    photo: volkov,
    name: "Александр Волков",
    role: "Руководитель отдела ИКИ",
    quote: "Я вижу, как люди теряют надежду — и возвращаю её.",
  },
  {
    photo: morozova,
    name: "Елена Морозова",
    role: "Специалист по банкротству",
    quote: "Моя задача — не просто исправить данные, а восстановить вашу жизнь.",
  },
  {
    photo: sidorov,
    name: "Дмитрий Сидоров",
    role: "Эксперт по ФССП",
    quote: "Банки боятся наших жалоб. Мы знаем, как их заставить слушать.",
  },
  {
    photo: kuznetsova,
    name: "Ольга Кузнецова",
    role: "Финансовый юрист",
    quote: "Если вы не можете получить кредит — это не ваша вина. Мы это исправим.",
  },
];

export function Team() {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {MEMBERS.map((m) => (
        <figure key={m.name} className="group flex flex-col items-center text-center">
          <div
            className="relative h-40 w-40 overflow-hidden rounded-full border border-cyan/30 transition-all duration-500 group-hover:border-cyan group-hover:scale-[1.03]"
            style={{
              boxShadow:
                "0 0 24px color-mix(in oklab, var(--cyan) 22%, transparent), inset 0 0 0 4px color-mix(in oklab, var(--ink-deep) 60%, transparent)",
            }}
          >
            <img
              src={m.photo}
              alt={m.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="mt-6 smallcaps text-cyan">{m.role}</div>
          <figcaption className="mt-2 font-display text-xl md:text-2xl text-silver">
            {m.name}
          </figcaption>
          <blockquote className="mt-4 max-w-[22ch] text-base md:text-lg italic leading-relaxed text-silver-dim">
            «{m.quote}»
          </blockquote>
        </figure>
      ))}
    </div>
  );
}