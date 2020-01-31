# Mixins
## type-init
```scss
@mixin type-init(
  $scale: $config-default-scale,
  $ratio: $config-default-ratio
){...}
```
| Param | Type | Description |
| --- | --- | --- |
| `$scale` | map | A typographical scale containing name:step pairs |
| `$ratio` | number(unitless) | Ratio used to generate font sizes |

This mixin generates a series of css custom properties (variables) that contain text sizes and line heights according to the provided typographical scale. This is useful for generating multiple scales across several media queries.
### Example
```scss
$test-map: (
  'normal': 0;
  'medium': 1;
  'large': 2;
);
@include type-init($scale: $test-map);
```
This should generate three css variables, or six if `$use-dynamic-scale` is set to true. The value of each variable is generated using the scale, ratio, and base text size. See [configuration]() for more.
```
--normal: <font-size>;
--medium: <font-size>;
--large: <font-size>;
```
If using dynamic scale, you'll also get
```
--normal-lh: <line-height>;
--medium-lh: <line-height>;
--large-lh: <line-height>;
```
## type-set
```scss
@mixin type-set(
  $name: 'normal',
  $step: 'null',
  $print-variables: $config-use-dynamic-scale,
  $map: $config-default-scale
)
```
| Param | Type | Description |
| --- | --- | --- |
| `$name` | string | A name of a key on `$map`, used to look up the step and name the css variables if they are printed |
| `$step` | number(unitless) | Step to increase or decrease the font size based on the configured ratio |
| `$print-variables` | boolean | Set to true to print css variables in addition to font size and line height |
| `$map` | map | Pass a custom map of name:step pairs |
::: warning
The variables `$step`, `$print-variables`, and `$map` should only be given an argument for testing purposes. Set these values using either global(reccommended) or local configuration.
:::

This mixin is used to add the `font-size` property to the selector. It can also add the `line-height` property if using vertical rhythm. When configured to print variables, it will output two sets of properties.

### Example
```scss
.foo {
  @include stratus.type-set('normal');
}
```
1. The unit used for font sizes and line heights can be configured using global(recommended) or local configuration.
2. Variables will also be printed if `$print-variables` is set to true. The non-variable property will also be printed for compatibility with older browsers.
3. Line height will only be printed if `$use-vertical-rhythm` is set to true. The unit used for line height will match that of the font size.
```css
.foo {
  font-size: 1rem; /*[1]*/
  font-size: var(--normal); /*[2]*/
  line-height: 1.6rem; /*[3]*/
  line-height: var(--normal-lh);
}
```
