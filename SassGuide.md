#  Sass Guide - Gowdilya Jeyakumar


## Welcome
    This has useful documentation and Notes on Sass

## Important Topics
[Color](#color)

## Color
 ### Lighten & Darken Colour
    The darken() function decreases lightness by a fixed amount, which is often not the desired effect. To make a color a certain percentage darker than it was before, use color.scale() instead.

    Because darken() is usually not the best way to make a color darker, it’s not included directly in the new module system. However, if you have to preserve the existing behavior, darken($color, $amount) can be written color.adjust($color, $lightness: -$amount).

    // #036 has lightness 20%, so when darken() subtracts 30% it just returns black.
    @debug darken(#036, 30%); // black

    // scale() instead makes it 30% darker than it was originally.
    @debug color.scale(#036, $lightness: -30%); // #002447
