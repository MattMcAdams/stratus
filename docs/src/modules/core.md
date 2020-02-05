# Core

## Functions

### get
```scss
@function get(
  $map,
  $keys...
) {...}
```
| Param | Type | Description |
| --- | --- | --- |
| `$map` | map | The map to get data from |
| `$keys...` | argument list | a path of keys to reach the data |

Used for getting values from nested keys.

#### Example
```scss
$example: (
  'foo': (
    'bar': 10px
  )
);

$baz: stratus.get($example, 'foo', 'bar'); // Returns 10px
```

### modular-scale
```scss
@function modular-scale(
  $increment,
  $base: 1em,
  $ratio: $config-type-ratio
) {...}
```
| Param | Type | Description |
| --- | --- | --- |
| `$increment` | number(unitless) | Steps up or down on the scale |
| `$base` | number | The base number to be used in the scale |
| `$ratio` | number(unitless) | The scale ratio used to calculate the steps |

Used to create a modular scale and calculate the values of steps on that scale.
Essentially, each step up the scale is a multiple of the ratio times the previous step, with 0 being equal to the base number.

### min-multiple
```scss
@function min-multiple(
  $base,
  $min,
  $multiple: 1
) {...}
```
| Param | Type | Description |
| --- | --- | --- |
| `$base` | number | The base number to multiply |
| `$min` | number | The smallest possible number for the function to return |
| `$multiple` | number(unitless) | what multiples of the base number to calculate |

This function finds the smallest multiple of the base number that is larger than or equal to the minimum value.

### strip-unit
```scss
@function strip-unit(
  $value
) {...}
```
| Param | Type | Description |
| --- | --- | --- |
| `$value` | number | Number to remove the unit from |

Returns the input number without it's css unit. For example, an input of 10px would return 10.

### convert-unit
```scss
@function convert-unit(
  $value,
  $unit,
  $base: $config-rem-size
) {...}
```
| Param | Type | Description |
| --- | --- | --- |
| `$value` | number | Number to convert |
| `$unit` | string | Unit to convert the input to |
| `$base` | number(px) | The base rem size of the project |

Converts an input number to another type. For example, you can use this function to convert 10px to a rem unit based on the document's rem size.
