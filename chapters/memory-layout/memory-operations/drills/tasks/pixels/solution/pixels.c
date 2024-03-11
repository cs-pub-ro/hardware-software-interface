// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <time.h>
#include "pixel.h"

#define GET_PIXEL(a, i, j) (*(*((a) + (i)) + (j)))

void color_to_gray(struct picture *pic)
{
	for (int i = 0; i < pic->height; ++i)
		for (int j = 0; j < pic->width; ++j) {
			GET_PIXEL(pic->pix_array, i, j).R *= 0.3;
			GET_PIXEL(pic->pix_array, i, j).G *= 0.59;
			GET_PIXEL(pic->pix_array, i, j).B *= 0.11;
		}
}

void swap_rows(struct pixel *row1, struct pixel *row2, int width)
{
	/* Swap every from the two lines */
	for (int i = 0; i < width; ++i) {
		struct pixel temp = row1[i];

		row1[i] = row2[i];
		row2[i] = temp;
	}
}

void reverse_pic(struct picture *pic)
{
	for (int i = 0; i < pic->height / 2; ++i)
		swap_rows(pic->pix_array[i], pic->pix_array[pic->height - 1 - i],
				pic->height);
}

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
