// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <time.h>

#include "pixel.h"
#include "pixels.h"

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
	printf("\n");
	color_to_gray(pic);
	print_picture(pic);
	printf("\n");
	reverse_pic(pic);
	print_picture(pic);

	free_picture(&pic);
	free_pixel_array(&pix_array, height, width);

	return 0;
}
