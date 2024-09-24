# Linking an Object File (without Source Code)

Access the directory `drills/tasks/obj-link-dev/support/`.
The file `shop.o` exposes an interface (functions and variables) that allows displaying messages.
Edit the `main.c` file to properly call the exposed interface and display the messages:

```bash
price is 21
quantity is 42
```

Explore the interface and the content of the functions in the `shop.o` file using `nm` and `objdump`.

If you're having difficulties solving this exercise, go through [this](../../../reading/linking.md) reading material.
