# Functions

These functions can be used as a set of custom measurements of space for margins, paddings, etc.

## lh
```scss
@function lh(
  $input,
  $line-height: $config-lh-unit
) {...}
```
| Param | Type | Description |
| --- | --- | --- |
| `$input` | number(unitless) | Multiply the line height by this number |
| `$line-height` | number | The base line height. |

Use the base line height to calculate measurements.

## sp
```scss
@function sp(
  $input,
  $size: $config-sp-unit
) {...}
```
| Param | Type | Description |
| --- | --- | --- |
| `$input` | number(unitless) | Multiply the custom space unit by this number |
| `$line-height` | number \| 'auto' | The base custom space unit. |

Create measurements using the value you set for the size of a space unit in the configuration. If set to auto, it will behave like the `li()` function above.

## ms
```scss
@function ms(
  $input,
  $ratio: $config-ms-unit
) {...}
```
| Param | Type | Description |
| --- | --- | --- |
| `$input` | number(unitless) | Multiply the ratio by this number |
| `$ratio` | number(unitless) | The scale's ratio. |

Create measurements using a modular scale and the ratio set in the configuration.
