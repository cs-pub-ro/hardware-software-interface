// SPDX-License-Identifier: BSD-3-Clause

#include <string.h>
#include <stdio.h>
#include "graded_test.h"

extern void print_string(const char *src);

#define OUTPUT_BUFFER_SIZE 1024

static int check_print_output(const char *input)
{
	char buffer[OUTPUT_BUFFER_SIZE] = {0};
	FILE *original_stdout = stdout;

	// Redirect stdout to a buffer using a temporary file
	FILE *temp = tmpfile();

	if (!temp)
		return 0;

	fflush(stdout);
	stdout = temp;

	print_string(input);

	fflush(stdout);
	fseek(temp, 0, SEEK_SET);
	fread(buffer, 1, OUTPUT_BUFFER_SIZE - 1, temp);

	fclose(temp);
	stdout = original_stdout;

	buffer[strcspn(buffer, "\n")] = 0;

	return strcmp(buffer, input) == 0;
}

static int test_print_simple(void)
{
	return check_print_output("Hello");
}

static int test_print_special(void)
{
	return check_print_output("Test123!@#");
}

static int test_print_long(void)
{
	return check_print_output("This is a very long string to test output correctness!");
}

static struct graded_test all_tests[] = {
	{ test_print_simple, "test_print_simple", 33 },
	{ test_print_special, "test_print_special", 33 },
	{ test_print_long, "test_print_long", 34 },
};

int main(void)
{
	run_tests(all_tests, sizeof(all_tests) / sizeof(all_tests[0]));
	return 0;
}
