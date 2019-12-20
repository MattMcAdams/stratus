# Stratus
Minimal, modular, and modest, Stratus offers several powerful Sass tools to get started with a web project. It can help standardize spacing, organize and manipulate color, and generate and maintain a typographical scale.

![Release](https://img.shields.io/github/v/release/mattmcadams/stratus?include_prereleases)
![License](https://img.shields.io/github/license/mattmcadams/stratus)
![Size](https://img.shields.io/github/languages/code-size/mattmcadams/stratus)
![Sass 1.23.0](https://img.shields.io/badge/dart--sass-%5E1.23.0-%23bf4080)
![Maintained](https://img.shields.io/maintenance/yes/2020)

## Install
You can install Stratus by either downloading the latest release and including it in your project, or by downloading it with npm.

> **NOTE**<br>If using the package distributed from GitHub, you'll also need to linclude the following line in your `.npmrc` file at the root of your project: `@mattmcadams:registry=https://npm.pkg.github.com`.

1. Install with npm
```
npm install @mattmcadams/stratus --save-dev
```
2. Configure your settings (optional)
```scss
@use 'stratus/src/config' with (
  $param: value
);
```
3. Include in your project
```scss
@use 'stratus';
```

## Use
With the Sass modules syntax, use Stratus in your project like this:
```scss
@use 'stratus';

foo: {
  @include stratus.type-set('normal');
}
```
You can learn more about all of Stratus' functions and mixins in the project's [documentation]().

> **NOTE**<br>
> If you've installed Stratus using npm, you'll also need to include `node-modules` in your build process. The method of achieving this depends on your setup. Look at this project's [package.json]() to see a possible solution

## Requirements
Because Stratus uses the Sass modules syntax, using it in your project means you must compile using the dart implementation of sass.

If using npm, you can install sass like so
```
npm install sass --save-dev
```
You can learn more about [dart sass]() on their website, and Mirium Suzanne has a great article about the [module system]() on css-tricks.

## Contribute!
I'm a self taught developer, and this has been my pet project I've used to learn about best practices, project management, and so much more, so I'm sure it's not perfect.

See something that could be better? Found a bug? Have an idea for a new feature? Come [help build](), [submit an issue](), or [contact me]()! I'd love to chat and hear your ideas.

## Looking forward
This project is constantly evolving, and I'm excited to bring more features to it in the future. Some of my current thoughts include mixins inspired by boubon, a minimal style boilerplate, and UI components.
