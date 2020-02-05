# Media

## Functions

### get-breakpoint <Badge text="private" type="warning"/>
```scss
@function get-breakpoint(
  $key,
  $map: $config-breakpoint-map
) {...}
```
| Param | Type | Description |
| --- | --- | --- |
| `$key` | number \| key($map) | A width size or a key on either the global breakpoint map or a map passed as an argument for `$map` |
| `$map` | map | A Sass map with string: number pairs where 'string' is the name of the breakpoint and 'number' is the screen width it is associated with |

Resolves input breakpoint to a number

## Mixins

### orientation <Badge text="private" type="warning"/>
```scss
@mixin orientation(
  $orientation: 'portrait'
) {...}
```
| Param | Type | Description |
| --- | --- | --- |
| `$orientation` | 'portrait' or 'landscape' | screen orientation media query should match. |

Creates a media query based on screen rotation / orientation

### media
```scss
@mixin media(
  $breakpoint,
  $direction: min
) {...}
```
| Param | Type | Description |
| --- | --- | --- |
| `$input` | number \| key($config-breakpoint-map) \| 'landscape' or 'portrait' | Sets the media query orientation or width |
| `$direction` | 'min' or 'max' | When using a width based query, sets the query to 'min-width' or 'max-width' |

Creates a media query for screen orientation, or screen max/min-width depending on input.
