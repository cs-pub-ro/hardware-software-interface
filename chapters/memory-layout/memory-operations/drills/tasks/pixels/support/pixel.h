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

struct picture *generate_picture(int height, int width, struct pixel **pix_array)
{
	struct picture *pic = malloc(sizeof(*pic));

	if (pic == NULL) {
		perror("malloc");
		exit(1);
	}

	pic->height = height;
	pic->width = width;

	pic->pix_array = malloc(pic->height * sizeof(*pic->pix_array));
	if (pic->pix_array == NULL) {
		perror("malloc");
		exit(1);
	}

	for (int i = 0; i < pic->height; ++i) {
		pic->pix_array[i] = malloc(pic->width * sizeof(**pic->pix_array));
		if (pic->pix_array[i] == NULL) {
			perror("malloc");
			exit(1);
		}
	}

	for (int i = 0; i < pic->height; ++i)
		for (int j = 0; j < pic->width; ++j)
			pic->pix_array[i][j] = pix_array[i][j];

	return pic;
}

struct pixel generate_pixel(const unsigned char R,
					const unsigned char G, const unsigned char B)
{
	struct pixel pixel;

	pixel.R = R;
	pixel.G = G;
	pixel.B = B;

	return pixel;
}

void print_picture(struct picture *pic)
{
	for (int i = 0; i < pic->height; ++i) {
		for (int j = 0; j < pic->width; ++j) {
			printf("%u %u %u ", pic->pix_array[i][j].R,
						pic->pix_array[i][j].G, pic->pix_array[i][j].B);
			if (j != pic->width - 1)
				printf(" | ");
		}
		printf("\n");
	}
}

struct pixel **generate_pixel_array(int height, int width)
{
	struct pixel **pix_array = malloc(height * sizeof(*pix_array));

	if (pix_array == NULL) {
		perror("malloc");
		exit(1);
	}

	for (int i = 0; i < height; ++i) {
		pix_array[i] = malloc(width * sizeof(**pix_array));
		if (pix_array[i] == NULL) {
			perror("malloc");
			exit(1);
		}
	}

	unsigned int seed = time(NULL);

	for (int i = 0; i < height; ++i)
		for (int j = 0; j < width; ++j)
			pix_array[i][j] = generate_pixel(rand_r(&seed) % 256,
								rand_r(&seed) % 256, rand_r(&seed) % 256);

	return pix_array;
}

void free_pixel_array(struct pixel ***pix_array, int height, int width)
{
	(void) width;

	for (int i = 0 ; i < height ; ++i)
		free((*pix_array)[i]);

	free(*pix_array);
}

void free_picture(struct picture **pic)
{
	free_pixel_array(&(*pic)->pix_array, (*pic)->height, (*pic)->width);
	free(*pic);
}

#endif // __PIXEL_H__
