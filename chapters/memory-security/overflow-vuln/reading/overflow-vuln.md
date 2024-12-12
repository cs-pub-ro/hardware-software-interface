# Buffer Overflow Attacks

## How is Buffer Overflow Used?

Buffer overflow can be exploited by a potential attacker to overwrite certain data within a program, affecting the execution flow and providing specific benefits to the attacker.
Most often, an attacker initiates a buffer overflow attack with the goal of gaining access to confidential data that a normal user would not typically have access to.

Buffer overflow attacks are generally used on static buffers stored at the stack level.
This is because the stack, in addition to program data, also stores return addresses following function calls (see laboratory 7).
These addresses can be overwritten through a buffer overflow attack, in which case the program's execution flow can be altered.
By overwriting the return address, upon completion of the current function's execution, the program will not return to the calling function's execution but will instead "jump" to another address within the executable where execution will continue.
This event can lead to undefined behavior of the program if the jump address has not been calculated correctly.

The goal of an attacker is to take control of a system by gaining access to a shell from which they can run commands.
This can be achieved by overwriting the return address, using a system call through which a shell can be opened on the system where the executable is running (more details in the OS course).

## How Do We Protect Against Buffer Overflow Attacks?

There are many ways to protect an executable from these types of attacks, most of which you will study in detail in the OS course next year.
A good practice against this type of attack is to avoid using insecure functions, such as those mentioned above.
More details on best practices against buffer overflow attacks can be found [here](https://security.web.cern.ch/recommendations/en/codetools/c.shtml).

Often, best practices prove to be insufficient in the "battle" against hackers, which is why several executable protection mechanisms have been invented by manipulating the code and its position within the executable (*Position Independent Code* - [PIC](https://en.wikipedia.org/wiki/Position-independent_code)), through address randomization (*Address Space Layout Randomization* - [ASLR](https://en.wikipedia.org/wiki/Address_space_layout_randomization)), or by introducing additional checks in the code to detect potential attacks.

These checks are performed by introducing special values, called **canaries**, on the stack between the buffer and the function's return address.
These values are generated and placed within the executable by the compiler and differ with each run of the executable.
When an attacker tries to overwrite the return address, they will also overwrite the canary value, and before exiting the current function call, it will be checked whether that value has been modified or not.
If it has been modified, it means that a buffer overflow has occurred, and the program execution will be interrupted.

This mechanism is called **Stack Smashing Protection** or **Stack Guard**. More details about Stack Guard and buffer overflow attacks can be found [here](https://en.wikipedia.org/wiki/Buffer_overflow).
