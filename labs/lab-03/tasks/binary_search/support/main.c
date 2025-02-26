// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "binary_search.h"

int main(void)
{
	int v[] =  {1, 2, 15, 51, 53, 66, 202, 7000};
	int len = sizeof(v) / sizeof(int);
	int dest = v[2]; /* 15 */

	printf("Found dest %d on pos %d\n", dest, binary_search(v, len, dest));

	return 0;
}
