# Color module
## `$_default-color-map`
```sass
@type: map
@access: private

$_default-color-map: (
  'info': #1273e6,
  'notice': #da7b12,
  'negative': #d7373f,
  'positive': #258f6c
);
```
This is the default color reference map used when no custom map has been configured.


## $stratus-color-map
<hr>
Type: Map, Access: Global, Source
<hr>
When organizing colors in either a flat map or nested map, you can pass your color map to `$stratus-color-map` during configuration. This variable can then be used in `color()`.

### Defaults
By default, `$stratus-color-map` points to the private variable `$_default-color-map`.
## color()
The color function returns a color from the map configured with `$stratus-color-map`, it is essentially a wrapper to get a value from a nested map if the map is nested.
