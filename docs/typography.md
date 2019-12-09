# Typography module
The type module includes tools to help generate and maintain font sizes and line heights across one or more typographical scales.

## $type-config
**type**: map | **access**: global | **source**: [_typography.scss](https://github.com/MattMcAdams/stratus/blob/master/src/partials/_typography.scss)
_____
`$type-config` is a map of configurable settings for the Stratus typography module. These settings set global preferences and tell the functions and mixins how to operate.

```scss
$type-config: (
  'use-dynamic-scale': false,
  'text-size': 16,
  'line-height': 1.6,
  'rem-size': 16
) !default;
```

| Param | Type | Description |
| --- | --- | --- |
| `use-dynamic-scale` | boolean | Determines whether or not mixins will print css custom properties in addition to the static style rules, allowing for the type scale to change across media queries. |
| `text-size` | number(unitless) | The base font size of body copy such as the `<p>` element. Expressed as a unitless number, but understood to equate to a measurement given in pixels. |
| `line-height` | number(unitless) | The base line height for the body copy. |
| `rem-size` | number(unitless) | The size of 1rem expressed as a value in pixels. Change this if you are also changing the default size of 1rem. |

## $scale-ratio
**type**: number(unitless) | **access**: public | **source**: [_typography.scss](https://github.com/MattMcAdams/stratus/blob/master/src/partials/_typography.scss)
_____
**Default Value**: 1.25 (Major Third)
The scale ratio defines the mathematical relationship between font sizes in the scale. The ratio creates a harmony in type much like the harmonies created by musical scales, as such, this value of this ratio is often taken from music.

You can define as many ratios and use any naming convention for those values. This is useful if you wish to have different ratios acorss different media queries.

To learn more about type ratios and typographical scales, check out this great tool: [Type Scale - A Visual Calculator](https://type-scale.com/), and this fantastic [article about typographical scales](https://spec.fm/specifics/type-scale) from the Spec network.

Here are several common scales and their values:

| Scale | Value |
| --- | --- |
| Minor Second | 1.067 |
| Major Second | 1.125 |
| Minor Third | 1.2 |
| Major Third | 1.25 |
| Perfect Fourth | 1.333 |
| Augmented Fourth | 1.414 |
| Perfect Fifth | 1.5 |
| Golden Ratio | 1.618 |

## $type-scale
**type**: map | **access**: public | **source**: [_typography.scss](https://github.com/MattMcAdams/stratus/blob/master/src/partials/_typography.scss)
_____
The `$type-scale` map is used to calculate the font size and line heights of text in relation to the set ratio. You can define more than one type scale and use any naming convention for alternate scales. This is useful if you wish to have different scales across different media queries.

**Default Setting**
```scss
$type-scale: (
  'xlarge': 3,
  'large': 2,
  'medium': 1,
  'normal': 0,
  'small': -1,
  'xsmall': -2,
) !default;
```

## type-init()
**type**: mixin | **access**: public | **source**: [_typography.scss](https://github.com/MattMcAdams/stratus/blob/master/src/partials/_typography.scss)
_____
This mixin is used to generate css custom properties when `use-dynamic-scale` is set to true. It will loop through the name:value pairs in the provided scale and create font sizes and line heights based on the provided ratio.

### Spec
```scss
type-init($scale: $type-scale, $ratio: $scale-ratio)
```
| Arg | Type | Description |
| --- | --- | --- |
| `$scale` | map | Map of name:value pairs that represent the name and position of each step on the typographical scale |
| `$ratio` | number(unitless) | The mathematical relationship of font sizes in the scale |

### Example
To generate more than one scale, you can include type-init in each target media query.
```scss
@media (orientation: portrait) {
  :root {
    @include type-init($ratio: 1.2);
  }
}

@media (orientation: landscape) {
  :root {
    @include type-init($ratio: 1.25);
  }
}
```
This will create several css custom properties that look roughly like this, for each media query:
```
--medium
--medium-lh
--normal
--normal-lh
```

## type-setting()
**type**: mixin | **access**: public | **source**: [_typography.scss](https://github.com/MattMcAdams/stratus/blob/master/src/partials/_typography.scss)
_____
The `type-setting` mixin is used to apply a font size and line height to a specific selector.

### Spec
```scss
type-setting($name: 'normal',  $step: null, $print-variables: map-get($type-config, 'use-dynamic-scale'))
```
| Arg | Type | Description |
| --- | --- | --- |
| `$name` | string | Name of the step, should be a key on the `$type-scale` map. |
| `$step` | number(unitless) \| null | The position of this rule on the scale. Overrides the value assigned in the `$type-scale` map. |
| `$print-variables` | boolean | Overrides the global `use-dynamic-scale` setting to print css custom properties with the style declarations |

> **NOTE**
> The `$step` and `$print-variables` params mostly exist for testing and debugging purposes. Changing these values may have unexpected outcomes when using a dynamic scale. It is recommended to set name:value pairs in the `$type-scale` map and call those values using the `$name` argument here.

### Example:
```scss
p {
  @include type-setting('normal');
}
```
With the default settings, the output will be:
```css
p {
  font-size: 1rem;
  line-height: 1.6rem;
}
```
If `use-dynamic-scale` is set to true, it will include:
```css
p {
  font-size: 1rem;
  font-size: var(--normal, 1rem);
  line-height: 1.6rem;
  line-height: var(--normal-lh, 1.6rem);
}
```
