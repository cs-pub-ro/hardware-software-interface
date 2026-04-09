// SPDX-License-Identifier: BSD-3-Clause

#include <string.h>
#include <stdio.h>
#include "graded_test.h"

extern void print_reverse_string(const char *src, size_t len);

#define OUTPUT_BUFFER_SIZE 1024

static int check_print_output(const char *input, const char *expected_output)
{
	char buffer[OUTPUT_BUFFER_SIZE] = {0};
	FILE *original_stdout = stdout;

	// Redirect stdout to a buffer using a temporary file
	FILE *temp = tmpfile();

	if (!temp)
		return 0;

	fflush(stdout);
	stdout = temp;

	print_reverse_string(input, strlen(input));

	fflush(stdout);
	fseek(temp, 0, SEEK_SET);
	fread(buffer, 1, OUTPUT_BUFFER_SIZE - 1, temp);

	fclose(temp);
	stdout = original_stdout;

	buffer[strcspn(buffer, "\n")] = 0;

	return strcmp(buffer, expected_output) == 0;
}

static int test_reverse_simple(void)
{
	return check_print_output("abc", "cba");
}

static int test_reverse_special(void)
{
	return check_print_output("abc!@#", "#@!cba");
}

static int test_reverse_long(void)
{
	return check_print_output("reverseme!", "!emesrever");
}

static struct graded_test all_tests[] = {
	{ test_reverse_simple, "test_reverse_simple", 33 },
	{ test_reverse_special, "test_reverse_special", 33 },
	{ test_reverse_long, "test_reverse_long", 34 },
};

int main(void)
{
	run_tests(all_tests, sizeof(all_tests) / sizeof(all_tests[0]));
	return 0;
}
