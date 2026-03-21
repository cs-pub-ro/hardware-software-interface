// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "vector_max.h"

int vector_max(int *v, int len)
{
	int max;
	unsigned int i;

	i = 0;
	max = v[i];
L0:
	if(i < len) {
		if(v[i] > max) {
			max = v[i];
		}
		i++;
		goto L0;
	}
	return max;
	return -1;
}
