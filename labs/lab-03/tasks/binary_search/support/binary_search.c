// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "binary_search.h"

int binary_search(int *v, int len, int dest)
{
	int start = 0;
	int end = len - 1;
	int middle;

	goto binary_search;

	search_right:
		start = middle + 1;
		goto binary_search;

	search_left:
		end = middle - 1;
		goto binary_search;

	binary_search:
		middle = (start + end) / 2;
		if (start > end)
			goto dest_not_found;
		if (*(v + middle) == dest)
			goto dest_found;
		if (*(v + middle) < dest)
			goto search_right;
		if (*(v + middle) > dest)
			goto search_left;
		
	dest_found:
		return middle;
	dest_not_found:
		return -1;
}