// SPDX-License-Identifier: BSD-3-Clause

#include <string.h>
#include <stdio.h>
#include <stdlib.h>
#include "graded_test.h"

extern void print_string_length(int len);

#define OUTPUT_BUFFER_SIZE 1024

static int check_length_output(int input_len)
{
	char buffer[OUTPUT_BUFFER_SIZE] = {0};
	FILE *original_stdout = stdout;

	// Redirect stdout to a temp file
	FILE *temp = tmpfile();

	if (!temp)
		return 0;

	fflush(stdout);
	stdout = temp;

	print_string_length(input_len);

	fflush(stdout);
	fseek(temp, 0, SEEK_SET);
	fread(buffer, 1, OUTPUT_BUFFER_SIZE - 1, temp);
	fclose(temp);

	stdout = original_stdout;

	char expected[OUTPUT_BUFFER_SIZE];

	snprintf(expected, sizeof(expected), "String length is %d\n", input_len);

	return strcmp(buffer, expected) == 0;
}

static int test_length_zero(void)
{
	return check_length_output(0);
}

static int test_length_small(void)
{
	return check_length_output(5);
}

static int test_length_large(void)
{
	return check_length_output(42);
}

static struct graded_test all_tests[] = {
	{ test_length_zero, "test_length_zero", 20 },
	{ test_length_small, "test_length_small", 40 },
	{ test_length_large, "test_length_large", 40 },
};

int main(void)
{
	run_tests(all_tests, sizeof(all_tests) / sizeof(all_tests[0]));
	return 0;
}
