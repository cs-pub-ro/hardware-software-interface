// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "binary_search.h"

int binary_search(int *v, int len, int dest)
{
	int start = 0;
	int end = len - 1;
	int middle;
label:
	if (start > end) {
		goto nasol;
	}
	if (start <= end) {
		middle = (start + end) / 2;
	}
	if (dest < *(v + middle)) {
			end = middle - 1;
			goto label;
	}
	if (dest > *(v + middle)) {
		start = middle + 1;
		goto label;
	}
	if (dest == *(v + middle)) return middle;
nasol:
	return -1;
}
