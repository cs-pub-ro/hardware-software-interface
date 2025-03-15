// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

/* checks if the array is sorted */
static int is_sorted(int a[], int n)
{
	int i;

	for (i = 1; i < n; i++)
		if (a[i] < a[i-1])
			return 0;

	return 1;
}

/* shuffle an array */
static void shuffle(int a[], int n)
{
	int i;
	int t, r;
	unsigned int seed = time(NULL);

	for (i = 0; i < n; i++) {
		t = a[i];
		r = rand_r(&seed) % n;
		a[i] = a[r];
		a[r] = t;
	}
}

int main(void)
{
	int numbers[] = {1, 13, 2,  5};
	int len = sizeof(numbers) / sizeof(*numbers);
	int i;

	while (1) {
		shuffle(numbers, len);

		if (is_sorted(numbers, len))
			/* TODO: Use goto instead of break */
			break;
	}

	for (i = 0; i < len; i++)
		printf("%d ", numbers[i]);
	printf("\n");

	return 0;
}
