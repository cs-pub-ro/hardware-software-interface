// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "binary_search.h"

int binary_search(int *v, int len, int dest)
{
	int start = 0;
	int end = len - 1;
	int middle;
START:
	if(end < start) {
		goto NOT_FOUND;
	}
	middle = start + (end - start) / 2;
	if (v[middle] == dest) {
		goto FOUND;
	}
	if (v[middle] < dest) {
		goto BIGGER;
	}
	end = middle + 1;
	goto START;
BIGGER:
	start = middle + 1;
	goto START;
FOUND:
	return middle;
NOT_FOUND:
	return -1;
}
