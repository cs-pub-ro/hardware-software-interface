// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <stdlib.h>

#include "find_max.h"

/**
 * Reads a vector from the keyboard and asks to find the maximum element
 * using the find_max function.
 */
int main(void)
{
	int n;

	scanf("%d", &n);

	int *arr = malloc(n * sizeof(*arr));

	if (arr == NULL) {
		perror("malloc");
		exit(1);
	}

	for (int i = 0 ; i < n; i++)
		scanf("%d", &arr[i]);

	int *max_elem = (int *)find_max(arr, n, sizeof(*arr), compare);

	printf("The maximum element is: %d\n", *max_elem);

	free(arr);
	return 0;
}
