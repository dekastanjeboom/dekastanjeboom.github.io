# De Kastanjeboom
Webpage for bed and breakfast ['De KaSTaNJeBooM'](https://www.dekastanjeboom.be) in Jabbeke, Belgium.

## Contact
For questions or remarks, contact [bert.lievrouw@gmail.com](mailto:bert.lievrouw@gmail.com).

## Dependencies
React app initialized with create-react-app.

Makes use of:
- React-bootstrap
- Bootstrap 4
- Now UI-kit

## Instructions
- Variable parameters are located in `.env` file
- Translations are located in `src/locales/<taalcode>/translation.json`

### Run locally
```
npm run start
```

### Update and deploy
- Commit changes to `development` git branch
- Bump version in git tag, package.json and describe changes in `CHANGELOG.md`
- Merge `development` branch into `master` branch
- Deploy `master` branch to github pages:
```
npm run predeploy
npm run deploy
```

## Dependencies
- Node v14
  - `nvm use 14`
  - if node-sass error: 
    - `npm install`
    <!-- - `npm rebuild node-sass`
    https://proustibat.medium.com/how-to-fix-error-node-sass-does-not-yet-support-your-current-environment-os-x-64-bit-with-c1b3298e4af0 -->