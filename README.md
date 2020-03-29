<h1>
<strong>FrontBox KSS Styleguide</strong> <small>by Bartosz Piwek</small>
</h2>

//TODO: description

[![npm version](https://badge.fury.io/js/%40bpiwek%2Ffrontbox-kss-styleguide.svg)](https://badge.fury.io/js/%40bpiwek%2Ffrontbox-kss-styleguide)

## Install

Add package on your project
```bash
npm i @bpiwek/frontbox-kss-styleguide
```
or
```bash
yarn add @bpiwek/frontbox-kss-styleguide
```

## Usage
Be sure to be familiar with [kss-node](https://kss-node.github.io/kss-node/).

Create config file `kss-config.json` in your root project folder and past below config:
```json
{
  "title": "...",
  "builder": "node_modules/@bpiwek/frontbox-kss-styleguide/dist/",
  "extend": "node_modules/@bpiwek/frontbox-kss-styleguide/dist/helpers/",
  "destination": "documentation/",
  "homepage": "src/README.md",
  "custom": [
    "Function",
    "Output",
    "OutputCSS",
    "Icons",
    "Usage",
    "Arguments",
    "Title",
    "Style"
  ]
}
```

## Develop
Make sure to install this fallowing plugins for Visual Code Studio before making changes.

<ul>
<li>
<a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">Prettier - code formatter</a>
</li>
<li>
<a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint">Stylelint - style linter</a>
</li>
</ul>

## Bugs

Feel free to report bug using
<a href="https://github.com/BartoszPiwek/Frontbox-KSS-Styleguide/issues/new?labels=bug">this link</a>.
