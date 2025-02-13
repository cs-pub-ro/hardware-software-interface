// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <time.h>
#include "pixel.h"

/**
 * TODO a
 * The function takes an image as a parameter and returns the reversed image.
 * By reversed image we mean the reversal of the rows of the pix_array matrix
 * from the picture structure, as follows: Line 1 becomes line n, line 2 becomes
 * line n - 1, etc.
 */
void reverse_pic(struct picture *pic);

/**
 * TODO b
 * The function takes an image as a parameter and returns the new image obtained
 * by converting each pixel to its grayscale value.
 * The grayscale value of a pixel is calculated according to the following formula:
 * p.r = 0.3 * p.r;
 * p.g = 0.59 * p.g;
 * p.b = 0.11 * p.b;
 */
void color_to_gray(struct picture *pic);

/**
 * The structure of a pixel, that of an image, as well as their generation,
 * are defined in pixel.h. The program receives from stdin the height
 * and width of the image. It is preferable to enter small values
 * that can be easily checked later.
 * Use the print_picture function to print the components of the image.
 * After completing a TODO, call the corresponding function in main
 * followed by print_picture to see if the desired result is obtained.
 */
int main(void)
{
	int height, width;

	scanf("%d%d", &height, &width);
	struct pixel **pix_array = generate_pixel_array(height, width);
	struct picture *pic = generate_picture(height, width, pix_array);

	print_picture(pic);

	free_picture(&pic);
	free_pixel_array(&pix_array, height, width);

	return 0;
}
