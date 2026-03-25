// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "vector_max.h"

int vector_max(int *v, int len)
{
	int max;
	unsigned int i = 0;
L0:
	max = v[i];
L1:
	i++;
	if (max < v[i] && i < len) {
		goto L0;
	}
	if (i < len) {
		goto L1;
	}
	return max;
}
