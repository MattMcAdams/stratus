# Functions

## get-breakpoint <Badge text="private" type="warning"/>
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
