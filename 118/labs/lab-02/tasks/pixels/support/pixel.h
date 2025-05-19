/* SPDX-License-Identifier: BSD-3-Clause */

#ifndef __PIXEL_H__
#define __PIXEL_H__

struct pixel {
	unsigned char R;
	unsigned char G;
	unsigned char B;
};

struct picture {
	int height;
	int width;
	struct pixel **pix_array;
};

struct picture *generate_picture(int height, int width, struct pixel **pix_array);

struct pixel generate_pixel(const unsigned char R,
					const unsigned char G, const unsigned char B);

void print_picture(struct picture *pic);

struct pixel **generate_pixel_array(int height, int width);

void free_pixel_array(struct pixel ***pix_array, int height, int width);

void free_picture(struct picture **pic);

#endif // __PIXEL_H__
