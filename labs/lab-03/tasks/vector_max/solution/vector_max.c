// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "vector_max.h"

int vector_max(int *v, int len)
{
	int max;
	unsigned int i;
	/**
	 * TODO: Implement finding the maximum value in the vector
	 */

	i = 0;
	max = v[0];

loop:

	if (v[i] <= max)
		goto smaller;

	max = v[i];

smaller:
	i++;

	if (i < len)
		goto loop;

	return max;
}
