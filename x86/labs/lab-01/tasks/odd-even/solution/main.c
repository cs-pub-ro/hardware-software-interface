// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <stdlib.h>
#include <errno.h>

#include "odd_even.h"

int main(void)
{
	int *numbers, i, n;

	printf("Size of array: "); scanf("%d", &n);

	numbers = malloc(sizeof(*numbers) * n);

	if (numbers == NULL) {
		perror("malloc() failed while allocating `numbers`");
		exit(errno);
	}

	for (i = 0; i < n; ++i) {
		printf("Number %d: ", i + 1);
		scanf("%d", numbers + i);
	}

	check_parity(numbers, n);

	free(numbers);

	return EXIT_SUCCESS;
}
