---
parent: Lab 3 - Toolchain. GOTO
nav_order: 4
---

# Guide: C - Warm-up GOTOs

1. Modify the source code in the `support/bogosort/bogosort.c` file, by replacing the `break` instruction with a `goto` instruction ([Bogosort](https://en.wikipedia.org/wiki/Bogosort)).
1. Similarly, replace the `continue` instruction in `support/ignore_the_comments/ignore_the_comments.c` with a `goto` instruction without changing the functionality of the code.

>**WARNING**: When writing code with labels, please adhere to the following indentation recommendations:

- Do not indent labels.
Keep them aligned with the left margin of the editing screen.
- Each label should be on its own line.
There is no code on the same line as the label.
- Do not take labels into consideration when indenting the code.
The code should be indented in the same way whether there are labels or not.
- Leave a blank line before the line containing a label.

>**NOTE**: [Situation](https://stackoverflow.com/questions/3517726/what-is-wrong-with-using-goto/3517765) where `goto` may be useful.

If you're having difficulties solving this exercise, go through [this](../../reading/c-goto-statements.md) reading material.
