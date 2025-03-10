// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "iterate.h"
#include "array.h"

void print_chars(void)
{
	unsigned char *char_ptr = ((unsigned char*)&v);

	for (int i = 0; i < sizeof(v) / sizeof(*char_ptr); i++) {
	printf("%p -> 0x%x\n", char_ptr, *char_ptr);
	char_ptr++;
	}
	printf("-------------------------------\n");
}

void print_shorts(void)
{
	unsigned short int *short_ptr = ((unsigned short int*)&v);

	for (int i = 0; i < sizeof(v) / sizeof(*short_ptr); i++) {
	printf("%p -> 0x%x\n", short_ptr, *short_ptr);
	short_ptr++;
	}
	printf("-------------------------------\n");
}

void print_ints(void)
{
	unsigned int *int_p = ((unsigned int*)&v);

	for (int i = 0; i < sizeof(v) / sizeof(*int_p); i++) {
	printf("%p -> 0x%x\n", int_p, *int_p);
	int_p++;
	}
	printf("-------------------------------\n");
}
