# Global Configuration

Below are all of the global configuration variables that can be set for Stratus. Note that while it is possible to override these variables using module level configuration, it is not advised to do so. You can set all of the global variables without using some or all of the modules.

To configure Stratus, `@use` the config file in your project and set new values for any variables you'd like to change. You can learn more about how to do this in the [Sass documentation on module configuration](https://sass-lang.com/documentation/at-rules/use#configuring-modules).

```scss
@use '@mattmcadams/stratus/src/config' with (
  $line-height: 1.5
)
```

## $use-dynamic-scale
__boolean__ | Default: false

This determines if some typography mixins will include CSS variables for font sizes and/or line heights. This can be useful if you'd like to use a different scale or ratio for different media queries.

## $rem-size
__number(px)__ | Default: 16px

This should equal the pixel size of 1rem. By default, most browsers have this set as 16px. This variable is used to calculate unit conversions and many other measurements throughout Stratus. Think of this as the calibration setting for measurements.

## $text-size
__number__ | Default: $rem-size

This should equal the desired size of your body copy, or the size of the text in the `<p>` element.

## $type-unit
__string \['rem'|'em'|'px'|'pt']__ | Default: 'rem'

This will determine the unit used for typographical related measurements such as font size.

## $line-height
__number(unitless)__ | Default: 1.6

This is the line height for the base text size and should be a unitless number.

## $default-ratio
__number(unitless)__ | Default: 1.25

Used in several of Stratus' modules for the modular scale.

## $default-scale
__map__

Default:
```scss
$default-scale: (
  'xlarge': 3,
  'large': 2,
  'medium': 1,
  'normal': 0,
  'small': -1,
  'xsmall': -2,
);
```

The default scale is used to assign keyword strings to numerical steps on a modular scale, with 0 being the base number. This is primarilly used in the typography module to calculate font sizes and generate CSS variables to be used with media queries.

## $use-vertical-rhythm
__boolean__ | Default: true

If set to `true`, Stratus will calculate fixed line-heights for each font size using the same unit as the font size. For example, with a line-height of 1.5, and base text size of 10rem, the generated line height will be 1.5rem.

Set to false to ignore line heights altogether and print the unitless line height when the line height must be included.

## $breakpoint-map
__map__

Default
```scss
$breakpoint-map: (
  'xxlarge': 2560px,
  'xlarge': 1440px,
  'large': 1024px,
  'medium': 761px,
  'small': 760px,
  'xsmall': 300px
);
```

Used in the media query module, this map creates keywords and screen-width values to be used in addition to orientation landscape / portrait.

## $use-mix-method
__boolean__ | Default: true

This variable sets the default color mixing method used when lightening or darkening a color using the functions from the color module. True will use the `color.mix` method by default, while false will use `color.scale` instead.

## $space-unit-size
__number | 'auto'__ | Default: 'auto'

This variable sets the size of one space unit, used by the `sp()` function in the structure module. This can be anything you'd like and is meant to be used as a custom unit of measurement for your project. By default, this uses the line height as the value.
