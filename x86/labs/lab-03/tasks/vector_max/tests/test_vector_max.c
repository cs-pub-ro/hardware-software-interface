// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>

#include "graded_test.h"

int vector_max(int *v, int len);

static int test_max_middle_of_array(void)
{
	int v[] = {4, 1, 2, -17, 15, 22, 6, 2};
	int len = sizeof(v) / sizeof(int);

	return vector_max(v, len) == 22;
}

static int test_max_end_of_array(void)
{
	int v[] =  {1, 2, 15, 51, 53, 66, 202, 7000};
	int len = sizeof(v) / sizeof(int);

	return vector_max(v, len) == 7000;
}

static int test_max_beginning_of_array(void)
{
	int v[] = {100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90};
	int len = sizeof(v) / sizeof(int);

	return vector_max(v, len) == 100;
}


static struct graded_test all_tests[] = {
	{ test_max_middle_of_array, "test_max_middle_of_array", 33},
	{ test_max_end_of_array, "test_max_end_of_array", 33},
	{ test_max_beginning_of_array, "test_max_beginning_of_array", 34},
};

int main(void)
{
	run_tests(all_tests, sizeof(all_tests) / sizeof(all_tests[0]));
	return 0;
}
