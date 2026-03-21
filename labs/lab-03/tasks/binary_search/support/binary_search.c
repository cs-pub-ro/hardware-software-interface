// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "binary_search.h"

int binary_search(int *v, int len, int dest)
{
	int start = 0;
	int end = len - 1;
	int middle;
	
	middle = (start + end) / 2;
alg:
	if(dest < v[middle]) {
		end = middle;
	}
	if(dest > v[middle]) {
		start = middle;
	}
	if(dest == v[middle]) {
		goto ret;
	}
	middle = (start + end) / 2;
end:
	if(start > end) {
		return -1;
	}
	goto alg;
ret:
	return middle;
}
