/* SPDX-License-Identifier: BSD-3-Clause */

#ifndef __PIXELS_H__
#define __PIXELS_H__ 1

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

#endif // __PIXELS_H__
