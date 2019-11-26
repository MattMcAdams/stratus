# stratus
Minimal, Modular, Modest. Stratus offers several powerful SCSS tools to get started with a web project. It does this by tackling a few problem areas and encouraging more consistent styles.

![Release](https://img.shields.io/github/v/release/mattmcadams/stratus?include_prereleases)
![License](https://img.shields.io/github/license/mattmcadams/stratus)
![Size](https://img.shields.io/github/languages/code-size/mattmcadams/stratus)
![Bourbon](https://img.shields.io/github/package-json/dependency-version/mattmcadams/stratus/bourbon)
![Maintained](https://img.shields.io/maintenance/yes/2020)
![Sass](https://img.shields.io/badge/made%20with-Sass-%23bf4080)

## Install
You can install Stratus by either downloading the latest release and including it in your project*, or by downloading it with npm.

1. Add a file ``.npmrc`` to your project folder with these contents:
```
@mattmcadams:registry=https://npm.pkg.github.com
```
2. Install with npm 
```
npm install @mattmcadams/stratus --save
```

Note that if you install Stratus manually, you will also need to download and install Bourbon.

## Use
### Typography
Stratus is largely built around the idea of a scalable type system and includes several powerful options to get web typography and vertical rhythm set up quickly for a new project. Because all of the typographical styles is controlled from this module, it is easy to ensure all type styles remain consistent across the project.

In your SCSS, call the ``type-setting`` mixin and pass it a key from your type scale map. The mixin will calculate the correct font size and line height.
```
p {
  @include type-setting(normal);
}
```

### Structure
Another goal of Stratus is to help eliminate magic numbers. The structure component can help with this as well as encouraging consistency. When combined with the typography module it can help ensure vertical rhythm is carried through the layout and spacing of elements.

Stratus achieves this with a custom unit of measurement that can be called with the ``s()`` function.

```
h2 {
  margin-top: s(2);
}
```

### Color
To tint or shade a color according to the color scale, use the ``color(X, Y)`` function. Where X is the color to be manipulated and Y is a number 100 - 900 in increments of 100, or a straight percentage.
```
a {
  color: color(blue, 800);
}
```
This will darken the color blue by 60%.

## Only what you need
Something here you don't want? Toss it out. Some systems are tied loosely together and may need a nudge to get untangled, but I've tried to make Stratus as modular as possible. **This is meant to be a starting point, not a CSS library. Take it and transform it into your own unique project.**

# Contribute!
See something that could be better? Found a bug? Have an idea for a new feature?

Come help build, submit an issue, or contact me!
