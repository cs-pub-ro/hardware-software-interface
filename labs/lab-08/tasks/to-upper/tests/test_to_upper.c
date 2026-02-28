// SPDX-License-Identifier: BSD-3-Clause

#include <string.h>
#include <stdio.h>
#include "graded_test.h"

extern void to_upper(char *src);

static int test_to_upper_1(void)
{
	char src[] = "abc";

	to_upper(src);

	return strcmp(src, "ABC") == 0;
}

static int test_to_upper_2(void)
{
	char src[] = "helloworld";

	to_upper(src);

	return strcmp(src, "HELLOWORLD") == 0;
}

static int test_to_upper_3(void)
{
	char src[] = "uptothesky";

	to_upper(src);

	return strcmp(src, "UPTOTHESKY") == 0;
}

static struct graded_test all_tests[] = {
	{ test_to_upper_1, "test_to_upper_1", 33 },
	{ test_to_upper_2, "test_to_upper_2", 33 },
	{ test_to_upper_3, "test_to_upper_3", 34 },
};

int main(void)
{
	run_tests(all_tests, sizeof(all_tests) / sizeof(all_tests[0]));
	return 0;
}
