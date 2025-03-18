// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "binary_search.h"

int binary_search(int *v, int len, int dest)
{
	int start = 0;
	int end = len - 1;
	int middle;
	goto loop_check;

loop_check:
	middle = (start + end) / 2;
	if (start <= end)
		goto check_middle;
	goto not_found;

check_middle:
	if (v[middle] == dest)
		goto found;
	if (v[middle] < dest)
		goto reset_start;
	goto reset_end;

reset_start:
	start = middle + 1;
	goto loop_check;

reset_end:
	end = middle - 1;
	goto loop_check;

found:
	return middle;

not_found:
	return -1;
}
