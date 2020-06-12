# Instructies

## Website updatable maken
Vereisten:
- Git installeren:
Op macos staat dit reeds geinstalleerd (open terminal en type 'git' + enter)
Op windows moet dit meestal nog geinstalleerd worden, dit gaat gepaard met de installatie van 'git bash'.
Vanuit 'git bash' kunnen verdere commando's worden uitgevoerd.

## Website updaten
Volgende commandline programma's moeten geïnstalleerd zijn:
- gh-pages
- npm

Authenticatie met github is noodzakelijk, zie gebruikersnaam en wachtwoord in 'auth.txt'.

Eens bovenstaande zaken inorde zijn, voer volgende commando's uit vanuit de 'site'-folder:
```
npm run predeploy
npm run deploy
