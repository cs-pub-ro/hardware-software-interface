---
parent: Lab 2 - Memory Operations. Introduction to GDB
nav_order: 3
---

# Task: Pixels

You will solve this exercise starting from the `pixels.c` file located in the `tasks/pixels/support` directory.

Consider the structure of a pixel and an image described in the `pixel.h` file:

```c
typedef struct Pixel {
    unsigned char R;
    unsigned char G;
    unsigned char B;
} Pixel;

typedef struct Picture {
    int height;
    int width;
    Pixel **pix_array;
} Picture;
```

Implement the following:

- The `reverse_pic(struct picture *pic)` function, which takes a Picture as a parameter and returns the reversed image.
By a reversed image, we mean the inversion of the rows of the `pix_array` matrix in the Picture structure.
- The `color_to_gray(struct picture *pic)` function, which takes a Picture as a parameter and returns the new image by converting each pixel to its grayscale value.
The grayscale value of a pixel is calculated using the following formula:

```c
p.r = 0.3 * p.r;
p.g = 0.59 * p.g;
p.b = 0.11 * p.b;
```

> **IMPORTANT:**
> Accessing the elements of the pixel matrix will be done using pointer operations.
> **Hint:** For simplicity, you can use the following macro:
>
> ```c
> #define GET_PIXEL(a, i ,j) (*(*((a) + (i)) + (j)))
> ```

If you're having difficulties solving this exercise, go through [this](../../reading/memory-operations.md) reading material.
