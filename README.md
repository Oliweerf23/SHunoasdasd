# Nordicate AI – Frontend (MVP, utan integrationer)

Ren **frontend** med mock-API (ingen GA4/Slack/SendGrid). Kör direkt:
```bash
npm install
npm run dev
```
Öppna http://localhost:3000/dashboard

## Funktioner
- Light/Dark-toggle (sparas).
- Överblick med KPI (enkla ord + förklaring).
- Vad funkar / funkar inte (en mening var).
- 3 snabba vinster.
- Insikter (topp 3, visa fler-länk).
- Ställ en fråga (UI, mockat svar).

## Struktur
- `app/dashboard/page.tsx` – hela dashboarden
- `app/api/*` – mockade endpoints för UI:t
- `components/*` – Card, Badge, ThemeToggle
- `styles/globals.css` – tema-tokens

Byt ut mock-API mot riktiga endpoints när backend är redo.
