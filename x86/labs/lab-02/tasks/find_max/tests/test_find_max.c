// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <sys/param.h>
#include <assert.h>

#include "graded_test.h"
#include "../support/find_max.h"

#define NMAX 10 // the size of the array used in tests

static int test_compare(void)
{
	int a = 20, b = 10;
	int res = compare(&a, &b);

	return res == 1 ? 1 : 0;
}

static int test_find_max(void)
{
	int arr[NMAX], maxx = INT_MIN;
	unsigned int seed = 42;

	for (int i = 0; i < NMAX; ++i) {
		arr[i] = rand_r(&seed) % 100;
		maxx = MAX(maxx, arr[i]);
	}

	int *max_elem = (int *)find_max(arr, NMAX, sizeof(*arr), compare);

	return *max_elem == maxx ? 1 : 0;
}

static struct graded_test all_tests[] = {
	{ test_compare, "test_compare", 30 },
	{ test_find_max, "test_find_max", 70},
};

int main(void)
{
	run_tests(all_tests, sizeof(all_tests) / sizeof(all_tests[0]));
	return 0;
}
