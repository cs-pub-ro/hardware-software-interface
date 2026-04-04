// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <stdlib.h>

#include "odd_even.h"

int main(void)
{
	int *numbers, i, n;
	scanf("%d", &n);
	numbers = malloc(n * sizeof(*numbers));
	
	for(i = 0; i< n; i++)
	{
		scanf("%d", (numbers + i));
	}

	check_parity(numbers, n);
	
	return 0;
}
