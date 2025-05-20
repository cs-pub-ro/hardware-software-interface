// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "binary_search.h"

int binary_search(int *v, int len, int dest)
{
	int start = 0;
	int end = len - 1;
	int middle;

	/**
	 * TODO: Implement binary search
	 */
loop:
	if (start > end)
		return -1;

	middle = (end + start) / 2;

	/* Element found */

	if (v[middle] == dest)
		goto out;

	/* Search to the left */

	if (v[middle] < dest)
		goto bigger;

	end = middle - 1;
	goto loop;

bigger:
	/* Search to the right */

	start = middle + 1;
	goto loop;

out:
	return middle;
}
