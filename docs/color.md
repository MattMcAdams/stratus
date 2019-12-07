# Color module
The color module helps you manage a complex color map and provides functions to manipulate color.

### `$_default-color-map`

[width="100%"]
|=======================
|Col 1|Col 2      |Col 3
|1    |Item 1     |a
|2    |Item 2     |b
|3    |Item 3     |c
|6    |Three items|d
|=======================

> **type**: map | **access**: private | **source**: [_color.scss](https://github.com/MattMcAdams/stratus/blob/master/src/partials/_color.scss)
_______

This is the default color reference map used when no custom map has been configured.
```sass
$_default-color-map: (
  'info': #1273e6,
  'notice': #da7b12,
  'negative': #d7373f,
  'positive': #258f6c
);
```

### `$stratus-color-map`
> **type**: map | **access**: global | **source**: [_color.scss](https://github.com/MattMcAdams/stratus/blob/master/src/partials/_color.scss)
___________
**Default Value**: $_default-color-map

This variable allows you to pass a custom color map to be used in the `color()` function below. You can define a custom color map by changing this global variable at the top of your project.

### Example
```
$stratus-color-map: $my-custom-map;
```
