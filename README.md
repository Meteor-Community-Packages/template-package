# template-package

Template package with CI and everything else to get started quickly with creating a new FOSS Meteor package.

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
![GitHub](https://img.shields.io/github/license/Meteor-Community-Packages/template-package)
[![Formatted with Biome](https://img.shields.io/badge/Formatted_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev/)
[![Linted with Biome](https://img.shields.io/badge/Linted_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/Meteor-Community-Packages/template-package?label=latest&sort=semver) [![](https://img.shields.io/badge/semver-2.0.0-success)](http://semver.org/spec/v2.0.0.html) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Getting started

1. Copy this repo to your new repository
2. Update links, names and content in `package.js`, `package.json`, `CHANGELOG.md`, `CONTRIBUTING.md`, `README.md`
3. Update content in `.github` directory to your liking.

* [Funding documentation](https://help.github.com/en/github/building-a-strong-community/displaying-a-sponsor-button-in-your-repository)

## What is under the hood

### GitHub apps

* [All Contributors](https://allcontributors.org/)
* [Dependabot](https://dependabot.com/)
* [GitHub Actions](https://github.com/Meteor-Community-Packages/template-package/actions)


### Code style

We use Biome for linting and formatting alike. See https://biomejs.dev for more information. We created a default
configuration file `.biomerc.json` which you can adjust to your liking. Additionally, there are four scripts
in `package.json`:

- `lint:check` - runs linter in check mode
- `lint:write` - runs linter in write mode
- `format:check` - runs formatter in check mode
- `format:wrie` - runs formatter in write mode

### Semver

This repository is setup to follow the [Semantic Versioning standard](https://semver.org/).

[![](https://img.shields.io/badge/semver-2.0.0-success)](http://semver.org/spec/v2.0.0.html)

### Typescript

If you want to use TypeScript in your package then include the following lines to enable TypeScript support:

```js
  // Enable TypeScript support
api.use('typescript');
api.mainModule('main.ts');
```

Note, you need to rename the default `.js` files to `.ts`.

### Tests

We use `meteortesting:mocha` for our tests. For this we created a minimal test app in the `testapp` directory.
This "proxy Meteor app" allows to run tests headless in CI as well as locally using puppeteer.

Before you run tests the first time, please setup the test repostiry via

```sh
./setupTests.sh
``` 

To run tests locally, use:

```sh
npm run test
npm run test:watch
npm run test:browser
``` 

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/StorytellerCZ"><img src="https://avatars2.githubusercontent.com/u/1715235?v=4" width="100px;" alt="Jan Dvorak"/><br /><sub><b>Jan Dvorak</b></sub></a><br /><a href="https://github.com/Meteor Community Packages/template-package/commits?author=StorytellerCZ" title="Code">💻</a> <a href="https://github.com/Meteor Community Packages/template-package/commits?author=StorytellerCZ" title="Documentation">📖</a> <a href="#maintenance-StorytellerCZ" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification.
Contributions of any kind welcome!
