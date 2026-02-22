// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#include "find_max.h"

void *find_max(void *arr, int n, size_t element_size,
				int (*compare)(const void *, const void *))
{
	void *max_elem = arr;

	(void) n;
	(void) element_size;
	(void) compare;

	/**
	 * TODO: Implement function
	 */

	return max_elem;
}

int compare(const void *a, const void *b)
{
	(void) a;
	(void) b;

	/**
	 * TODO: Implement function
	 */

	return 0x69;
}
