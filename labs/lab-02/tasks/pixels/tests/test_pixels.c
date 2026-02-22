// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <sys/param.h>
#include <assert.h>

#include "graded_test.h"
#include "pixel.h"
#include "pixels.h"

#define GET_PIXEL(a, i, j) (*(*((a) + (i)) + (j)))

static struct picture *pic;
static struct pixel **rev_array;
static struct picture *rev;

static struct
pixel **allocate_pixel_array(const int pix_array_height,
							 const int pix_array_width)
{
	struct pixel **pix_array = (struct pixel **)malloc(pix_array_height * sizeof(struct pixel **));

	if (!pix_array) {
		fprintf(stderr, "malloc() failed");
		exit(-1);
	}

	for (int i = 0; i < pix_array_height; ++i) {
		pix_array[i] = (struct pixel *)malloc(pix_array_width * sizeof(struct pixel));
		if (!pix_array[i]) {
			for (int j = i - 1; j >= 0; --j)
				free(pix_array[j]);
			fprintf(stderr, "malloc() failed");
			exit(-1);
		}
	}

	return pix_array;
}

static int test_reverse(void)
{
	reverse_pic(pic);

	rev_array = allocate_pixel_array(pic->height, pic->width);
	rev_array[0][0] = (struct pixel){5, 6, 7};
	rev_array[0][1] = (struct pixel){6, 7, 8};
	rev_array[1][0] = (struct pixel){3, 4, 5};
	rev_array[1][1] = (struct pixel){4, 5, 6};
	rev_array[2][0] = (struct pixel){1, 2, 3};
	rev_array[2][1] = (struct pixel){2, 3, 4};

	rev = generate_picture(pic->height, pic->width, rev_array);

	if (pic->height != rev->height || pic->width != rev->width)
		return 0;

	for (int i = 0; i < rev->height; ++i)
		for (int j = 0; j < rev->width; ++j)
			if (rev->pix_array[i][j].R != pic->pix_array[i][j].R ||
				rev->pix_array[i][j].G != pic->pix_array[i][j].G ||
				rev->pix_array[i][j].B != pic->pix_array[i][j].B)
				return 0;

	return 1;
}

static int test_color_to_gray(void)
{
	color_to_gray(pic);

	for (int i = 0; i < pic->height; ++i) {
		for (int j = 0; j < pic->width; ++j) {
			GET_PIXEL(rev->pix_array, i, j).R *= 0.3;
			GET_PIXEL(rev->pix_array, i, j).G *= 0.59;
			GET_PIXEL(rev->pix_array, i, j).B *= 0.11;
			if (GET_PIXEL(pic->pix_array, i, j).R != GET_PIXEL(rev->pix_array, i, j).R ||
				GET_PIXEL(pic->pix_array, i, j).G != GET_PIXEL(rev->pix_array, i, j).G ||
				GET_PIXEL(pic->pix_array, i, j).B != GET_PIXEL(rev->pix_array, i, j).B)
				return 0;
		}
	}

	return 1;
}

static struct graded_test all_tests[] = {
	{ test_reverse, "test_reverse", 50 },
	{ test_color_to_gray, "test_color_to_gray", 50},
};

int main(void)
{
	const int pix_array_height = 3;
	const int pix_array_width = 2;

	struct pixel **pix_array = allocate_pixel_array(pix_array_height, pix_array_width);

	pix_array[0][0] = (struct pixel){1, 2, 3};
	pix_array[0][1] = (struct pixel){2, 3, 4};
	pix_array[1][0] = (struct pixel){3, 4, 5};
	pix_array[1][1] = (struct pixel){4, 5, 6};
	pix_array[2][0] = (struct pixel){5, 6, 7};
	pix_array[2][1] = (struct pixel){6, 7, 8};

	pic = generate_picture(3, 2, pix_array);
	run_tests(all_tests, sizeof(all_tests) / sizeof(all_tests[0]));
	return 0;
}
