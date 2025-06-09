// SPDX-License-Identifier: BSD-3-Clause

#include <string.h>
#include <stdio.h>
#include "graded_test.h"

extern void rot13(char *src, int len);

static int test_rot13_plus_plus(void)
{
	char input[32] = "lorem\0ipsum\0dolor\0";
	char expected[] = "yberz vcfhz qbybe";
	int len = sizeof("lorem\0ipsum\0dolor\0") - 1;

	rot13(input, len);

	return strcmp(input, expected) == 0;
}

static int test_rot13_with_uppercase(void)
{
	char input[32] = "Hello\0World\0Test\0";
	char expected[] = "Uryyb Jbeyq Grfg";
	int len = sizeof("Hello\0World\0Test\0") - 1;

	rot13(input, len);

	return strcmp(input, expected) == 0;
}

static struct graded_test all_tests[] = {
	{ test_rot13_plus_plus, "test_rot13_plus_plus", 50 },
	{ test_rot13_with_uppercase, "test_rot13_with_uppercase", 50 },
};

int main(void)
{
	run_tests(all_tests, sizeof(all_tests) / sizeof(all_tests[0]));
	return 0;
}
