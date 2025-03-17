// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "vector_max.h"

int vector_max(int *v, int len)
{
	int max = 0;
	unsigned int i = 0;

	modify_max:
		max = *(v + i);

	check_max:
		if (*(v + i) > max)
			goto modify_max;
		i++;
	if (i < len)
		goto check_max;

		
	return max;
}
