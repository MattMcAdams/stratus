# Color Maps & Configuration
The color module helps you manage a complex color map and provides functions to manipulate color.

## $_default-color-map
**type**: map | **access**: private | **source**: [_config.scss](../dist/_config.scss)
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
**type**: map | **access**: public | **source**: [_config.scss](../dist/_config.scss)
_____
This variable allows you to pass a custom color map to be used in the `color()` function below. You can define a custom color map by changing this global variable at the top of your project.

```scss
$stratus-color-map: $_default-color-map !default;
```

## $default-color-key
**type**: string | **access**: public | **source**: [_config.scss](../dist/_config.scss)
_____
If using a deep color map, this is the key for the base color.

```scss
$default-color-key: 'base' !default;
```

### Example
```scss
$example-color-map: (
  'primary': (
    'base': // this is the base 'primary' color
    'light': // this is a light variant of the 'primary' color
  )
);
```

## $use-mix-method
**type**: boolean | **access**: public | **source**: [_config.scss](../dist/_config.scss)
_____
This configuration variable sets the default method for the `color-shift` function. `true` will use the Sass `mix()` function while `false` will use the Sass `color-scale` function. See `color-shift()` for more information.

```scss
$use-mix-method: true !default;
```

# Manipulating Colors

## color-alpha()
**type**: function | **access**: public | **source**: [_color.scss](../src/partials/_color.scss)
_____
Allows a color's opacity to be increased or decreased using the built in Sass `scale-color()` function to adjust the color's alpha chanel.

### Spec
```scss
color-alpha($color, $opacity)
```
| Arg | Type | Description |
| --- | --- | --- |
| `$color` | color | The color to be adjusted |
| `$opacity` | number(%) | Percent or number between 0 and 1, represents the desired opacity level. |

## color-mix()
**type**: function | **access**: public | **source**: [_color.scss](../src/partials/_color.scss)
_____
Allows a color to be made lighter or darker through the use of the Sass `mix()` function.

### Spec
```scss
color-mix($color, $percent)
```
| Arg | Type | Description |
| --- | --- | --- |
| `$color` | color | The color to be adjusted |
| `$percent` | number(%) | How much white or black to be mixed. Can be positive or negative |

## color-shift()
**type**: function | **access**: public | **source**: [_color.scss](../src/partials/_color.scss)
_____
Allows a color to be made lighter or darker through the use of either Sass `mix()` or Sass `scale-color()`.

### Spec
```scss
color-shift($color, $percent: null, $mix-method: $use-mix-method)
```
| Arg | Type | Description |
| --- | --- | --- |
| `$color` | color | The color to be adjusted |
| `$percent` | number(%) \| null | Can be positive or negative. Contolls how much the color is shifted |
| `$mix-method` | boolean | Determines what color manipulation method to use. `true` will use the Sass `mix()` function to mix the color with white or black. `false` will use the Sass `scale-color()` to shift the color's `$lightness` value. |

# The color function

## color()
**type**: function | **access**: public | **source**: [_color.scss](../src/partials/_color.scss)
_____
The `color()` function is used to return a value from the `$stratus-color-map` and make any adjustments to that color if necessary. It can be used to adjust a color's lightness and/or opacity.

### Spec
```scss
color($color, $variant: null, $opacity: null, $mix-method: $use-mix-method)
```
| Param | Type | Description |
| --- | --- | --- |
| `$color` | string \| color | This is the input color. It can be a color or a key from the `$stratus-color-map`. |
| `$variant` | string \| number(%) \| null | If `$color` resolves to a map, this can be a key on that map. Or it can be a positive or negative percentage, used to shift the color lighter or darker |
| `$opacity` | number(%) \| null | This controlls the desired opacity of the output color. |
| `$mix-method` | boolean | An override for the global `$use-mix-method` variable. See `color-shift` for more. |

### Example
```scss
#custom-map: (
  'primary': #1273e6,
  'accent': #258f6c
);
$stratus-color-map: $custom-map;

.foo { background-color: color('primary', 20%, 0.5); }
// returns #1273e6, mixed with 20% white, and lowered to 50% opacity.
```

### Color Variants
You can also use the `$variant` param to get a nested value. This can be useful if you have custom variants of the colors on the map.
```scss
#custom-map: (
  'primary': (
    'base': #1273e6,
    'light': #4899FF
   )
);
$stratus-color-map: $custom-map;

.bar { background-color: color('primary', 'light'); }
// returns { background-color: #4899FF }
```

## scale-index()
**type**: function | **access**: public | **source**: [_color.scss](../src/partials/_color.scss)
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
