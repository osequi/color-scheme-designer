# # Color Scheme Designer

The goal of this project is to create a yet another color scheme designer tailored for websites.
[Paletton](http://paletton.com/) is a good approach with awful live examples.

This color designer interacts directly with the underlying live example, an example showing all common elements a web page might have.
This way it makes fine tuning the palette more easier, and, on the fly.

## ## Practice

In typography, on the web, colors don't exist alone. White on white is white. _Something_ must be on white.

Once a color pairs up with another color they start to differ; they become engaged in a relationship. They interact.

Their interaction is complex but is foremost about contrast and hierarchy. Which is the dominating color bringing forward it's content? Or a dominated color bringing into background it's content?

Hierarchy exists on a monochromatic composition. Two colors provide and endless number of shades, combinations. Vivid colors&mdash;to differentiate, to bring in the mood&mdash;are mandatory on request, from case to case.

Source: [It's Only Color](https://robots.thoughtbot.com/Its-only-color).

### ### Primary colors

A light color for background WHITE and a dark color for text BLACK—the primary colors—are enough to form a color scheme.

COLOR SCHEME WITH ONLY THE PRIMARIES ACTIVE

The two provides combinations—normal text, inverted text, underlined text, bordered text—enough to style a blog.

THE LIST OF COMBINATIONS
CLICK TO BRING IN THE BLOG

### ### Secondary colors

Primary colors provide a monochromatic experience. Secondary colors—for highlighting and shading—bring in the a vivid experience.

COLOR SCHEME WITH ALSO THE SECONDARIES ACTIVE

Four colors provide sixteen combinations. Even if not all are legible the rest is enough to style a marketing site.

THE LIST OF COMBINATIONS
CLICK TO BRING IN THE MARKETING SITE.

## ## Theory

Colors interact. Either they complement each other or make a visible contrast.
For every website the task is to find a set of colors which complement well and contrast well.

### ### Color models and spaces

Different approaches exist to create certain sets of colors. Pantone for print, RGB for digital displays are such examples.

Every color space produces different set of colors using different techniques.

Absolute color spaces encapsulate all colors; others contains a subset of colors matching the target device's&mdash;printer, low-resolution screen, high resolution screen&mdash;capability.

Sometimes conversion is possible between different color spaces and sometimes not.

#### #### RGB vs CMYK

For example mixing `blue` with `yellow` in RGB gives `gray`, in CMYK gives `green` as expected.
This happens because the RGB model is additive, the CMYK model is substractive.

In RGB the default color of the canvas (the screen) is black. Adding a color lightens up the default black.
In CMYK the default color of the canvas (the paper) is white. Adding a color darkens the default white.

### ### Color properties

Colors have different properties like saturation, lightness, luminosity, temperature, contrast etc.
Some of these are absolute properties (luminosity, temperature), others relative to another color:

- Saturation: how much `gray` the color has.
- Lightness: how much `black` and `white` the color has.
- Contrast: the perceptual difference to another color.

For relative properties there is always another color.
For saturation and lightness the other color is white, gray and black, the special colors from the start, middle and end of the color spectrum.

### ### Color mixing and manipulation

What we can do with a color is:

1. Setting absolute properties: `color.luminace(0.5)`
2. Setting relative properties, the classic way of mixing with white, gray and black: `color.darken()`, `color.brighten()`, `color.saturate()`, `color.desaturate()`
3. Setting relative properties, the free way of mixing with any other color: `color.mix(red, blue, 0.5)`, `color.blend(red, blue, multiply)`
4. Checking color contrast to determine how to use two colors together: `color.contrast(red, blue)`
5. Mix them using different methods provided by different color spaces: `color.mix(red, blue, 0.5, 'hsla')`

## ## Resources

- http://alistapart.com/article/mixing-color-for-the-web-with-sass
- http://color-wheel-artist.com/hue.html
- http://www.dpbestflow.org/color/color-space-and-color-profiles
- https://robots.thoughtbot.com/Its-only-color
