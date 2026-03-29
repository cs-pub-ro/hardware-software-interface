// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>

#include "graded_test.h"

int binary_search(int *v, int len, int dest);

static int test_15_found(void)
{
	int v[] =  {1, 2, 15, 51, 53, 66, 202, 7000};
	int len = sizeof(v) / sizeof(int);
	int dest = v[2]; /* 15 */

	return binary_search(v, len, dest) == 2;
}

static int test_7000_found(void)
{
	int v[] = {1, 2, 15, 51, 53, 66, 202, 7000};
	int len = sizeof(v) / sizeof(int);
	int dest = v[7]; /* 7000 */

	return (binary_search(v, len, dest) == 7);
}

static int test_1_found(void)
{
	int v[] = {1, 2, 15, 51, 53, 66, 202, 7000};
	int len = sizeof(v) / sizeof(int);
	int dest = v[0]; /* 1 */

	return (binary_search(v, len, dest) == 0);
}

static int test_no_found(void)
{
	int v[] = {1, 2, 15, 51, 53, 66, 202, 7000};
	int len = sizeof(v) / sizeof(int);
	int dest = 3;

	return (binary_search(v, len, dest) == -1);
}


static struct graded_test all_tests[] = {
	{ test_15_found, "test_15_found", 25},
	{ test_7000_found, "test_7000_found", 25},
	{ test_1_found, "test_1_found", 25},
	{ test_no_found, "test_no_found", 25},
};

int main(void)
{
	run_tests(all_tests, sizeof(all_tests) / sizeof(all_tests[0]));
	return 0;
}
