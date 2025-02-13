// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

int main(void)
{
	unsigned int i;
	int v[] = {0xCAFEBABE, 0xDEADBEEF, 0x0B00B135, 0xBAADF00D, 0xDEADC0DE};
	/**
	 * We will use pointers to elements of different sizes to
	 * facilitate the display of elements of 1, 2, and 4 bytes.
	 */
	unsigned char *char_ptr = (unsigned char *) &v;
	unsigned short *short_ptr = (unsigned short *) &v;
	unsigned int *int_ptr = (unsigned int *) &v;

	/* Iterate through each byte of the array v */
	for (i = 0 ; i < sizeof(v) / sizeof(*char_ptr); ++i) {
		printf("%p -> 0x%x\n", char_ptr, *char_ptr);
		++char_ptr;
	}
	printf("-------------------------------\n");

	/**
	 * Iterate through 2 bytes at a time, we have only half the steps because we are
	 * displaying 2 bytes at each step.
	 */
	for (i = 0 ; i < sizeof(v) / sizeof(*short_ptr); ++i) {
		printf("%p -> 0x%x\n", short_ptr, *short_ptr);
		++short_ptr;
	}
	printf("-------------------------------\n");

	/**
	 * Iterate through 4 bytes at a time, we have only a quarter of the steps because we are
	 * displaying 4 bytes at each step.
	 */
	for (i = 0 ; i < sizeof(v) / sizeof(*int_ptr); ++i) {
		printf("%p -> 0x%x\n", int_ptr, *int_ptr);
		++int_ptr;
	}

	return 0;
}
