// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "vector_max.h"

int vector_max(int *v, int len)
{
	int max;
	int i = 1;
	max = *(v);
	label:
		if ( i >= len ){
			goto max;
		}
		if ( *(v + i) > max) {
			max = *(v + i);
		}
		i++;
		goto label;
	max:
		return max;
}
