# Floating Point Exception

To follow this guide, you'll need to use the `floating_point_exception.asm` file located in the `guides/floating-point-exception/support` directory.

The program tries to perform division using an `8 bit` operand, `bl`, in this case the quotient should be in the range [0, 255].
Given that `ax` is `22891` and `bl` is `2`, the result of the division would be out of the defined range.
Thus we will see a `Floating point exception` after the division.

>**Note**: For a detailed description of the `div` instruction check out the [documentation](https://www.felixcloutier.com/x86/idiv).
