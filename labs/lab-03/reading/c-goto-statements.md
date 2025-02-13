---
parent: Lab 3 - Toolchain. GOTO
nav_order: 3
---

# Reading: C basics - GOTOs

A less addressed concept in C tutorials is the goto statement.
Using the goto statement, a program can jump to intermediate points within a function.
These intermediate points are called labels.

## Syntax

Syntax-wise, a label consists of a name followed by the character `:`.

Code example:

 ```c
#include <stdio.h>

int main()
{
    int i, j, k;
    /* some code */
do_some_work:
    /* some other code */
    work();
    if (any_work())
        goto do_some_work;
    /* some code */
    return 0;
}
```

The program executes a job through the `work()` function.
In case there are other unfinished jobs, the program execution jumps to the label `do_some_work`.
`do_some_work` marks the point in the program where the processing of a new job begins.
To jump to this point, the goto statement followed by the declared label name is used.
Through different combinations of `if` statements and `goto` statements, other C instructions such as `else`, `for`, and `while` can be emulated.

The example code given above could be replaced with `do { … } while ();`:

```c
#include <stdio.h>

int main()
{
    int i, j, k;
    /* some code */
    do {
        /* some other code */
        work();
    } while (any_work());
    /* some code */
    return 0;
}
```

## The "WHYs" of `goto`

Not only is this instruction missing in many C tutorials, but recommendations are made against using it because it often leads to obfuscated code (difficult to understand, maintain, and debug).
However, there are cases where it is used.
In the Linux kernel code, for example, `goto` instructions are used as a form of try-catch from higher-level languages (such as C++, Java, C#, etc.).
Example:

```c
int process_data_from_mouse_device(...)
{
    int err;
    int x, y;

    /* >>try<< instructions */
    err = init_communication_with_mouse();
    if (err)
        goto error;

    err = get_x_coord_from_mouse(&x);
    if (err)
        goto error;

    err = get_y_coord_from_mouse(&y);
    if (err)
        goto error;

    err = announce_upper_layers_of_mouse_movement(x, y);
    if (err)
        goto error;

    err = close_communication_with_mouse();
    if (err)
        goto error;

    return 0;

    /* >>catch<< instructions' exceptions */
error:
    print_message("Failed to get data from mouse device. Error = %d", err);
    return err;
}
```

This code attempts to process data coming from a mouse and pass it to other higher-level parts of the kernel that could use it.
In case an error occurs, an error message is displayed, and the data processing is terminated.
The code seems correct but is not complete.
It's incomplete because if an error occurs in the middle of the function, communication with the mouse is left open.
An improved version would be the following:

```c
int process_data_from_mouse_device(...)
{
    int err;
    int x, y;

    /* >>try<< instructions */
    err = init_communication_with_mouse();
    if (err)
        goto error;

    err = get_x_coord_from_mouse(&x);
    if (err)
        goto error_close_connection;

    err = get_y_coord_from_mouse(&y);
    if (err)
        goto error_close_connection;

    err = announce_upper_layers_of_mouse_movement(x, y);
    if (err)
        goto error_close_connection;

    err = close_communication_with_mouse();
    if (err)
        goto error;

    return 0;

    /* >>catch<< instructions' exceptions */
error_close_connection:
    close_communication_with_mouse();
error:
    print_message("Failed to get data from mouse device. Error = %d", err);
    return err;
}
```

In the improved version, if an error occurs, a cleanup part is also performed: the connection with the mouse will be closed, and then the code will continue with the general error handling of any errors in the program (displaying an error message).

>**NOTE**: Why does this course/lab cover such a topic?
>
>When we study assembly language, we will notice that a large portion of the workflow resembles a program made up of goto statements, even though most instructions of a high-level language, such as C, are nonexistent.
>Thinking in terms of goto statements and including them in our code prepares us for working in assembly language.
>
>**WARNING**: In any other situation, this form of programming should be avoided as much as possible.
>![goto.png](https://imgs.xkcd.com/comics/goto.png)
