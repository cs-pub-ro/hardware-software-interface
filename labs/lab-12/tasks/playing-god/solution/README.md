---
nav_order: 1
parent: 'Task: Playing God'
---

# Solution

Run the executable with GDB.
You can see the random number in the register before the input function call.

In x86-64, the random number appears in EAX register (lower 32 bits of RAX):

```asm
$rax   : 0x289a27a5
$eax   : 0x289a27a5
```

The program generates `rand_r(&seed) % 100000`, so you need to calculate the modulo:

```bash
python3 -c "print(0x289a27a5 % 100000)" | ./dynamic2
# Result: 91333
```

Or use GDB to extract and calculate:

```bash
gdb -batch -ex "break *main+67" -ex "run" -ex "print \$eax % 100000" ./dynamic2 < /dev/null
```

Note: In 64-bit, registers use RAX/RBX/RCX naming, but the lower 32-bit portion (EAX) contains the return value from `rand_r()`.
