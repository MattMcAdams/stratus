# Color module
The color module helps you manage a complex color map and provides functions to manipulate color.

## $_default-color-map
**type**: map | **access**: private | **source**: [_color.scss](https://github.com/MattMcAdams/stratus/blob/master/src/partials/_color.scss)
_____

This is the default color reference map used when no custom map has been configured.

```scss
$_default-color-map: (
  'info': #1273e6,
  'notice': #da7b12,
  'negative': #d7373f,
  'positive': #258f6c
);
```

## $stratus-color-map
**type**: map | **access**: global | **source**: [_color.scss](https://github.com/MattMcAdams/stratus/blob/master/src/partials/_color.scss)
_____
**Default Value**: $_default-color-map

This variable allows you to pass a custom color map to be used in the `color()` function below. You can define a custom color map by changing this global variable at the top of your project.

### Example
```scss
$stratus-color-map: $my-custom-map;
```

## color()
**type**: function | **access**: public | **source**: [_color.scss](https://github.com/MattMcAdams/stratus/blob/master/src/partials/_color.scss)
_____
The `color()` function is used to return a value from the `$stratus-color-map`.

### Spec
```scss
color($keys...)
```
| Arg | Type | Description |
| --- | --- | --- |
| `$keys...` | arglist | list of keys that form a path to the desired key in the `$stratus-color-map` |

### Example
```scss
#custom-map: (
  'primary': #1273e6,
  'accent': #258f6c
);

$stratus-color-map: $custom-map;

.foo { background-color: color(primary); }
// returns { background-color: #1273e6; }
```
### Color Variants
You can also use the `color()` function to get a nested value. This can be useful if you have custom variants of the colors on the map.
```scss
#custom-map: (
  'primary': (
    'base': #1273e6,
    'light': #4899FF
   )
);

$stratus-color-map: $custom-map;

.bar { background-color: color(primary, light); }
// returns { background-color: #4899FF }
```
## scale-index()
**type**: function | **access**: public | **source**: [_color.scss](https://github.com/MattMcAdams/stratus/blob/master/src/partials/_color.scss)
_____
This function converts an input number to a percentage. This is useful if you need to calculate colors based on a model similar to that used in the colors of Google's Material Design, where each variant is reffered to by an increment of 100.

For the purposes of `scale-index()`, a level of 500 equals 0%. Every 50 increment less than 500 shifts the output percentage by +10%. Every 50 increment greater than 500 shifts the output by -10%.

The idea is that 500 is the base color, 100 is an extremely light variant of the base color, and 900 is extremely dark.

### Spec
```scss
scale-index($number)
```
| Arg | Type | Description |
| --- | --- | --- |
| `$number` | number(unitless) | Must be a non-negative integer < 1000 & divisible by 50 |

### Examples
```
scale-index(500) // 0%
scale-index(450) // 10%
scale-index(300) // 40%
scale-index(700) // -40%
```

## color-shift()
**type**: function | **access**: public | **source**: [_color.scss](https://github.com/MattMcAdams/stratus/blob/master/src/partials/_color.scss)
_____
Allows a color to be made darker or lighter through the use of either Sass `mix()` or Sass `scale-color()`. Also allows you to adjust the opacity of an input color all in the same function.

### Spec
```scss
color-shift($color, $percent: null, $opacity: null, $method: $default-color-method)
```
| Arg | Type | Description |
| --- | --- | --- |
| `$color` | color | The color to be adjusted |
| `$percent` | number(%) \| null | Can be positive or negative. Contolls how much the color is shifted |
| `$opacity` | number(%) \| null | Allows the input color's opacity to be adjusted |
| `$method` | keyword['mix' \| 'scale'] | Determines what color manipulation method to use. 'mix' will use the Sass `mix()` function to mix the color with white or black. `scale` will use the Sass `scale-color()` to shift the color's `$lightness` value. |
