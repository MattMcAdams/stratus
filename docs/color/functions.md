
# Functions
---
## color-index
```scss
@function color-index($number){...}
```
| Argument | Type | Description |
| --- | --- | --- |
| `$number` | number(unitless) | Must be a positive integer < 1000 & divisible by 50 |

This function converts an input number to a percentage. This is useful if you need to calculate colors based on a model similar to that used in the colors of Google's Material Design, where each color variant is reffered to by an increment of 100.

For the purposes of `color-index()`, a level of 500 equals 0%. Every increment of 50 less than 500 shifts the output percentage by +10%. Every 50 increment greater than 500 shifts the output by -10%.

The idea is that 500 is the base color, 100 is an extremely light variant of the base color, and 900 is extremely dark.

Returns a number(%) using this formula: `(($number - 500) / -5) + 0%`.

## color-mix
```scss
@function color-mix($color, $percent){...}
```
| Arg | Type | Description |
| --- | --- | --- |
| `$color` | color | The color to be adjusted |
| `$percent` | number(%) | Contolls how much white or black is mixed with the color. A negative percentage will mix black, positive will mix white. |

Allows a color to be made darker or lighter by mixing the color with white or black using the Sass `color.mix` function.

## color-alpha
```scss
@function color-alpha($color, $opacity){...}
```
| Arg | Type | Description |
| --- | --- | --- |
| `$color` | color | The color to be adjusted |
| `$opacity` | number | Can be a unitless number 0-1 inclusive, or a percentage between 0 and 100 |

Changes the input color to the desired opacity. Returns a color in rgba format.

## color-scale
```scss
@function color-scale(
  $color,
  $percent: null,
  $opacity: null,
  $mix: $config-use-mix-method
){...}
```
| Arg | Type | Description |
| --- | --- | --- |
| `$color` | color | The color to be adjusted |
| `$percent` | number(%) | Contolls how much lighter or darker to make the color. A negative percentage will make the color darker, a positive percentage will make the color lighter. |
| `$opacity` | number | Can be a unitless number 0-1 inclusive, or a percentage between 0 and 100 |
| `$mix` | boolean | determines whether to use `color.mix` or `color.scale` to modify the color's lightness |

This function can be used to change the lightness of a color and it's opacity at the same time.

::: tip
You can also choose to use the sass `color.scale` method of lightening or darkening the color if the output using the `color.mix` method washed out or muddy. This can be done once using `$mix: false` when calling the function. It can also be set globally in the configuration.
:::
