// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "vector_max.h"

int vector_max(int *v, int len)
{
	int max;
	unsigned int i;
	i = 0;
	max = v[0];
	goto move_to_next;

move_to_next:
	i++;
	if (i < len)
		goto check_element;
	goto display;

check_element:
	if (v[i] > max)
		goto reset_max;
	goto move_to_next;

reset_max:
	max = v[i];
	goto move_to_next;

display:
	return max;
}
