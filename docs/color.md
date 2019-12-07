# Color module
The color module helps you manage a complex color map and provides functions to manipulate color.

## $_default-color-map
**type**: map | **access**: private | **source**: [_color.scss](https://github.com/MattMcAdams/stratus/blob/master/src/partials/_color.scss)
_____

This is the default color reference map used when no custom map has been configured.

```sass
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
```
$stratus-color-map: $my-custom-map;
```

## color()
**type**: function | **access**: public | **source**: [_color.scss](https://github.com/MattMcAdams/stratus/blob/master/src/partials/_color.scss)
_____
The `color()` function is used to return a value from the `$stratus-color-map`.

### Spec
```
color($keys...)
```
| Arg | Type | Description |
| --- | --- | --- |
| $keys... | arglist | list of keys that form a path to the desired key in the `$stratus-color-map` |

### Example
```
$stratus-color-map: 
background-color: color(primary);
// returns the `primary` key on the `$stratus-color-map`
```
### Color Variants
You can also use the `color()` function to get a nested value. This can be useful if you have custom variants of the colors on the map.
```
background-color: color(primary, light);
// returns the `light` varient of the `primary` key on the `Stratus-color-map`
```
