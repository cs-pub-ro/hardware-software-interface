// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <stdlib.h>
#include <errno.h>

#include "odd_even.h"

void print_binary(int number, int nr_bits)
{
	int   i;
	char *bits = malloc(sizeof(*bits) * nr_bits);

	if (bits == NULL) {
		perror("malloc() failed while allocating `bits`");
		exit(errno);
	}

	for (i = 0; i < nr_bits; ++i) {
		*(bits + i) = 1 & number;
		number >>= 1;
	}

	printf("0b");
	for (i = nr_bits - 1; i >= 0; --i)
		printf("%d", *(bits + i));
	printf("\n");

	free(bits);
}

void check_parity(int *numbers, int n)
{
	int i, curr_nr;

	for (i = 0; i < n; ++i) {
		curr_nr = *(numbers + i);
		if (curr_nr & 1)
			printf("0x%08X\n", curr_nr);
		else
			print_binary(curr_nr, 8);
	}
}
