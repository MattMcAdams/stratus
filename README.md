> **WARNING: This project is no longer maintained. I'll keep this repo public for a while but plan to eventually decommission it. It is highly advised that you fork this repo or copy it's source code into your own project if you use this as a dependency. Let me know if you need help doing this and I'll do my best to work with you.**

# Stratus
Minimal, modular, and modest, Stratus offers several powerful Sass tools to get started with a web project. It can help standardize spacing, organize and manipulate color, and generate and maintain a typographical scale.

[![Release](https://img.shields.io/github/v/release/mattmcadams/stratus?include_prereleases)](https://github.com/MattMcAdams/stratus/releases) [![Build Status](https://travis-ci.org/MattMcAdams/stratus.svg?branch=master)](https://travis-ci.org/MattMcAdams/stratus)<br>
[![License](https://img.shields.io/github/license/mattmcadams/stratus)](https://github.com/MattMcAdams/stratus/blob/master/LICENSE)
[![Size](https://img.shields.io/github/languages/code-size/mattmcadams/stratus)](https://github.com/MattMcAdams/stratus/packages/61966)
[![Sass 1.23.0](https://img.shields.io/badge/dart--sass-%5E1.23.0-%23bf4080)](https://www.npmjs.com/package/sass)

## Install
You can install Stratus by either downloading the latest release and including it in your project, or by downloading it with npm.

> **NOTE**<br>If using the package distributed from GitHub, you'll also need to linclude the following line in your `.npmrc` file at the root of your project: `@mattmcadams:registry=https://npm.pkg.github.com`.

1. Install with npm
```
npm install @mattmcadams/stratus --save-dev
```
2. Configure your settings (optional)
```scss
@use '@mattmcadams/stratus/config' with (
  $param: value
);
```
3. Include in your project
```scss
@use '@mattmcadams/stratus';
```

## Use
With the Sass modules syntax, use Stratus in your project like this:
```scss
@use '@mattmcadams/stratus';

foo: {
  @include stratus.type-set('normal');
}
```
You can learn more about all of Stratus' functions and mixins in the project's [documentation](https://mattmcadams.github.io/stratus/).

> **NOTE**<br>
> If you've installed Stratus using npm, you'll also need to include `node-modules` in your build process. The method of achieving this depends on your setup.

## Requirements
Because Stratus uses the Sass modules syntax, using it in your project means you must compile using the dart implementation of sass.

If using npm, you can install sass like so
```
npm install sass --save-dev
```
You can learn more about [dart sass](https://sass-lang.com/dart-sass) on their website, and Mirium Suzanne has a great article about the [module system](https://css-tricks.com/introducing-sass-modules/) on css-tricks.

## Contribute!
I'm a self taught developer, and this has been my pet project I've used to learn about best practices, project management, and so much more, so I'm sure it's not perfect.

See something that could be better? Found a bug? Have an idea for a new feature? Come [help build](https://github.com/MattMcAdams/stratus/wiki), [submit an issue](https://github.com/MattMcAdams/stratus/issues/new), or [contact me](https://github.com/MattMcAdams)! I'd love to chat and hear your ideas.

## Looking forward
This project is constantly evolving, and I'm excited to bring more features to it in the future. Some of my current thoughts include mixins inspired by bourbon, a minimal style boilerplate, and UI components.
