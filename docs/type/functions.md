# Functions
## color-scale <Badge text="private" type="warning"/>
```scss
@function type-scale(
  $increment,
  $base: $config-text-size,
  $ratio: $config-default-ratio
) {...}
```
| Param | Type | Description |
| --- | --- | --- |
| `$increment` | number(unitless) | How many steps to increment up or down the scale. |
| `$base` | number | The base value the scale starts at. |
| `$ratio` | number(unitless) | The ratio the scale is built on. |

This function is used to find the font-size of text according to it's step on the typographical scale.

## Line Height <Badge text="private" type="warning"/>
```scss
@function line-height(
  $text-size,
  $line-height: $config-line-height,
  $base-text-size: $config-text-size,
  $static-output: $config-use-vertical-rhythm
) {...}
```
| Param | Type | Description |
| --- | --- | --- |
| `$text-size` | number | Text size to calculate line height for |
| `$line-height` | number(unitless) | Line height to use as the base for calculation |
| `$base-text-size` | number | The standard text size for your project |
| `$static-output` | boolean | True will output a static line height using the same unit as the input text size. False returns the unitless input lineheight |

Calculate line height based on input text size
