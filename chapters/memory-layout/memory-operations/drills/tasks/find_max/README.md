# Find Maximum in Array

You will solve this exercise starting from the `find-max.c` file located in the `drills/tasks/find-max/support` directory.

Implement the following functions:

```c
find_max(void *arr, int n, int element_size, int (*compare)(const void *, const void *))
```

which calculates the maximum element from an array based on a given comparison function:

```c
compare(const void *a, const void *b)
```

If you're having difficulties solving this exercise, go through [this](../../../reading/README.md#pointers-in-functions-and-function-pointers) reading material.
