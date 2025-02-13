---
nav_order: 10
parent: Lab 5 - Registers and Memory Addressing
---

# Guide: Addressing Arrays

To follow this guide, you'll need to use the `addressing_arrays.asm` file located in the `guides/addressing-arrays/support` directory.

The program increments the values of an array of 10 integers by 1 and iterates through the array before and after to show the changes.

> **Note:** `ecx` is used as the loop counter.
Since the array contains `dwords` (4 bytes), the loop counter is multiplied by 4 to get the address of the next element in the array.
