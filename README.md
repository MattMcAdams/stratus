# Stratus
Minimal, Modular, Modest. Stratus offers several powerful Sass tools to get started with a web project. It can help standardize spacing, organize and manipulate color, and generate and maintain a typographical scale.

![Release](https://img.shields.io/github/v/release/mattmcadams/stratus?include_prereleases)
![License](https://img.shields.io/github/license/mattmcadams/stratus)
![Size](https://img.shields.io/github/languages/code-size/mattmcadams/stratus)
![Sass 1.23.0](https://img.shields.io/badge/dart--sass-%5E1.23.0-%23bf4080)
![Maintained](https://img.shields.io/maintenance/yes/2020)

## Install
You can install Stratus by either downloading the latest release and including it in your project*, or by downloading it with npm.

1. Add a file `.npmrc` to your project folder with these contents:
```
@mattmcadams:registry=https://npm.pkg.github.com
```
2. Install with npm
```
npm install @mattmcadams/stratus --save
```
3. Include in your project
```
@import 'stratus/dist/stratus';
```

Note that if you install Stratus manually, you will also need to download and install Bourbon.

## Use
* [Organize and manipulate color](docs/color.md)
* [Create and maintain a typographical scale](docs/typography.md)

You'll also need to include node modules in your build process. The method of achieving this depends on your setup, but a basic npm build script might look something like this:
```json
"scripts": {
  "build": "node-sass --include-path=node_modules my-file.scss my-file.css"
}
```
The important part is `--include-path=node_modules`. Again, this may be different depending on your build setup. The script above uses node-sass and npm scripts to build.

## Contribute!
See something that could be better? Found a bug? Have an idea for a new feature?

Come help build, submit an issue, or contact me! I'd love to chat and hear your ideas.
