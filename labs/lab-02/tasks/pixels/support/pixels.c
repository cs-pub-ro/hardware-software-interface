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
	struct pixel *temp = NULL;
    for (int i = 0; i < pic->height / 2; i++) {
        temp = pic->pix_array[i];
        pic->pix_array[i] = pic->pix_array[pic->height - i - 1];
        pic->pix_array[pic->height - i - 1] = temp;
    }
}

void color_to_gray(struct picture *pic)
{
    for (int i = 0; i < pic->height; i++) {
        for (int j = 0; j < pic->width; j++) {
            struct pixel *p = &pic->pix_array[i][j];
            p->R *= 0.3;
            p->G *= 0.59;
            p->B *= 0.11;
        }
    }
}