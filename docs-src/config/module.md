# Module Configuration
These local configuration variables can be used to overwrite those set by global configuration on a per-module basis.

::: warning
It is recommended to adjust these values using the global configuration! See [global configuration](config) for descriptions of these variables, as well as how to set up global configuration.
:::

Variable are grouped by module and show what global setting they correspond to.

## Core
| Variable | Type | Value |
| --- | --- | --- |
| `$config-rem-size` | number(px) | `config.$rem-size` |
| `$config-type-ratio` | number(unitless) | `config.$default-ratio` |

## Media
| Variable | Type | Value |
| --- | --- | --- |
| `$config-breakpoint-map` | number | `config.$breakpoint-map` |

## Structure
| Variable | Type | Value |
| --- | --- | --- |
| `$config-lh-unit` | number | `type.line-height(0)` |
| `$config-sp-unit` | number | `config.$space-unit-size` |
| `$config-ms-unit` | number | `config.$default-ratio` |

## Type
| Variable | Type | Value |
| --- | --- | --- |
| `$config-use-dynamic-scale` | boolean | `config.$use-dynamic-scale` |
| `$config-rem-size` | number(px) | `config.$rem-size` |
| `$config-base-text-size` | number | `config.$text-size` |
| `$config-type-unit-zero` | 0(unit) | `config.$type-unit-zero` |
| `$config-line-height` | number(unitless) | `config.line-height` |
| `$config-use-vertical-rhythm` | boolean | `config.$use-vertical-rhythm` |
| `$config-default-ratio` | number(unitless) | `config.$default-ratio` |
| `$config-default-scale` | map of `['string': number]` pairs | `config.$default-scale` |

## Color
| Variable | Type | Value |
| --- | --- | --- |
| `$config-use-mix-method` | boolean | `config.$use-mix-method` |
