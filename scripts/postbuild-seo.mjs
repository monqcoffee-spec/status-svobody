import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const DIST = resolve("dist");
const SITE = "https://status-svobody.ru";

const indexPath = resolve(DIST, "index.html");
let indexHtml = readFileSync(indexPath, "utf8");

// --- Build bankruptcy/index.html with its own SEO meta ---
const bTitle =
  "Банкротство физических лиц под ключ — Юлия Армина · Статус свободы";
const bDesc =
  "Списание долгов через банкротство физических лиц: личное сопровождение Юлии Арминой, аудит, суд, защита имущества. Москва и вся Россия.";
const bOgTitle = bTitle;
const bOgDesc = bDesc;
const bUrl = `${SITE}/bankruptcy/`;

let bankruptcyHtml = indexHtml
  .replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${bTitle}</title>`,
  )
  .replace(
    /<meta name="description"[^>]*>/,
    `<meta name="description" content="${bDesc}" />`,
  )
  .replace(
    /<link rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${bUrl}" />`,
  )
  .replace(
    /<meta property="og:title"[^>]*>/,
    `<meta property="og:title" content="${bOgTitle}" />`,
  )
  .replace(
    /<meta property="og:description"[^>]*>/,
    `<meta property="og:description" content="${bOgDesc}" />`,
  )
  .replace(
    /<meta property="og:url"[^>]*>/,
    `<meta property="og:url" content="${bUrl}" />`,
  )
  .replace(
    /<meta name="twitter:title"[^>]*>/,
    `<meta name="twitter:title" content="${bOgTitle}" />`,
  )
  .replace(
    /<meta name="twitter:description"[^>]*>/,
    `<meta name="twitter:description" content="${bOgDesc}" />`,
  );

// Replace the ProfessionalService JSON-LD with a Service schema for bankruptcy
const bankruptcyJsonLd = `<script type="application/ld+json">
      ${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Банкротство физических лиц под ключ",
        serviceType: "Юридическое сопровождение банкротства физических лиц",
        description: bDesc,
        url: bUrl,
        provider: {
          "@type": "ProfessionalService",
          name: "Статус свободы Юлии Арминой",
          url: SITE,
          founder: { "@type": "Person", name: "Юлия Армина" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Москва",
            addressCountry: "RU",
          },
        },
        areaServed: { "@type": "Country", name: "Россия" },
      })}
    </script>`;

bankruptcyHtml = bankruptcyHtml.replace(
  /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
  bankruptcyJsonLd,
);

mkdirSync(resolve(DIST, "bankruptcy"), { recursive: true });
writeFileSync(resolve(DIST, "bankruptcy", "index.html"), bankruptcyHtml);

console.log("✓ dist/bankruptcy/index.html written with bankruptcy-specific SEO meta");