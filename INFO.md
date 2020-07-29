# Instructies

## Resultaten
Resultaten van publiek formulier:
https://docs.google.com/forms/d/1ZB-dIhdpxS7UAl6lW_PLNRqMTWk0Y-eaZAPnCCOQykc/edit

Resultaten als spreadsheet:
https://docs.google.com/spreadsheets/d/1VGxuyf3Tzu3vcdfn5fWF7lXVGQ5OzYKtuhQDuLdZqC8/edit#gid=1106194401

Publiek toegankelijk formulier (verwerkt in website):
https://docs.google.com/forms/d/e/1FAIpQLSfsG9w2iAFZJ0eXv--KmzZNmEdooTlrX2Bhe8mSWJHYQXqiZA/viewform


## Aanpassingen maken
_Bij het aanpassen van onderstaande bestanden mogen enkel de waarden (rechterkant van vergelijking) aangepast worden. Developer instructies worden aangeduid met (dev)_

- Cruciale waarden worden opgeslagen in `.env`. 
- Vertalingen in `src/locales/<taalcode>/translation.json`

### Vereisten voor update (dev)
Volgende commandline programma's moeten geïnstalleerd zijn:
- gh-pages
- npm
- git

### Update (dev)
- Commit veranderingen in `development`-branch
- Merge `development`-branch in `master`-branch
- Deploy master to github:
```
npm run predeploy
npm run deploy
```
- Bij grote veranderingen, pas `CHANGELOG.md` aan.