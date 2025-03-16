// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <time.h>

#include "pixel.h"
#include "pixels.h"

void reverse_pic(struct picture *pic)
{
	for (int i = 0; i < pic->height / 2; i++) {
		for (int j = 0; j < pic->width; j++) {
			struct pixel aux = GET_PIXEL(pic->pix_array, i, j);
			GET_PIXEL(pic->pix_array, i, j) = GET_PIXEL(pic->pix_array, pic->height - i - 1, j);
			GET_PIXEL(pic->pix_array, pic->height - i - 1, j) = aux;
		}
	}
}

void color_to_gray(struct picture *pic)
{
	for (int i = 0; i < pic->height; i++)
		for (int j = 0; j < pic->width; j++) {
			GET_PIXEL(pic->pix_array, i, j).R *= 0.3;
			GET_PIXEL(pic->pix_array, i, j).G *= 0.59;
			GET_PIXEL(pic->pix_array, i, j).B *= 0.11;
		}
}