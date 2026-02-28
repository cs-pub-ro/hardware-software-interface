// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "vector_max.h"

int main(void)
{
	int v[] = {4, 1, 2, -17, 15, 22, 6, 2};
	int len = sizeof(v) / sizeof(int);

	printf("Max is %d\n", vector_max(v, len));

	return 0;
}
