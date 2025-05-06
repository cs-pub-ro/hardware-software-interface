// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

int get_max(unsigned int *arr, unsigned int size, unsigned int *pos);

int main(void)
{
	unsigned int arr[] = { 19, 7, 129, 87, 54, 218, 67, 12, 19, 99 };
	unsigned int max, pos;

	max = get_max(arr, sizeof(arr) / sizeof(arr[0]), &pos);

	printf("max: %d on position: %d\n", max, pos);

	return 0;
}
