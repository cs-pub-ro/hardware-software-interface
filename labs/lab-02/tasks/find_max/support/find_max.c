// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#include "find_max.h"

void *find_max(void *arr, int n, size_t element_size,
				int (*compare)(const void *, const void *))
{
	void *max_elem = arr;

	for (int i = 1; i < n; i++)
		if (compare((char*)arr + i * element_size, max_elem) > 0)
			max_elem = (char*)arr + i * element_size;

	return max_elem;
}

int compare(const void *a, const void *b)
{
	int *nra = (int*)a;
	int *nrb = (int*)b;

	return *nra - *nrb;
}