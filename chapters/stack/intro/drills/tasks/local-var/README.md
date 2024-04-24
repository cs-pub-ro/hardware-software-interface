# Local Var

The program `local-var.asm` in the laboratory archive combines two sorted arrays (`array_1` and `array_2`) by placing the resulting array in `array_output` defined in the `.data` section.

Modify the program so that `array_1`, `array_2`, and `array_output` are allocated on the stack.
The array allocation is done using the `sub` instruction.
For the copies of arrays `array_1` and `array_2`, you will need to copy their elements from the `.data` section to the stack before using them.

If you're having difficulties solving this exercise, go through [this](../../../reading/stack.md) reading material
