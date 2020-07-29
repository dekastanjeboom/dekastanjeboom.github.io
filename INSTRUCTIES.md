# Instructies

## Aanpassingen maken

Cruciale waarden worden opgeslagen in `.env`.

### Vereisten
Volgende commandline programma's moeten geïnstalleerd zijn:
- gh-pages
- npm

### Website updaten
- Merge veranderingen in master
- Deploy master:
```
npm run predeploy
npm run deploy
```