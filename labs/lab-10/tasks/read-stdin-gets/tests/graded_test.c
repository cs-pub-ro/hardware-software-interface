// SPDX-License-Identifier: BSD-3-Clause

#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/param.h>

#include "./graded_test.h"

/*
 * Print test result. Printed message should fit in 72 characters.
 *
 * Print format is:
 *
 * description ...................... passed ... NNN
 * description ...................... failed ... NNN
 *   32 chars        24 chars           6     3   3
 */

static void print_test(const char *description, int result)
{
	/* Make these global linkage, so it's only allocated once. */
	static char print_buffer[74];
	static const char failed[] = "failed";
	static const char passed[] = "passed";
	size_t i;
	size_t len;

	/* Collect description in print_buffer. */
	len = MIN(strlen(description), 32);
	for (i = 0; i < len; i++)
		print_buffer[i] = description[i];

	/* Collect dots in print_buffer. */
	for (i = 0; i < 40; i++)
		print_buffer[12+i] = '.';

	/* Collect passed / failed. */
	for (i = 0; i < 6; i++) {
		if (result == 1)
			print_buffer[52+i] = passed[i];
		else
			print_buffer[52+i] = failed[i];
	}

	/* Collect newline. */
	print_buffer[59] = '\n';

	int ret = write(1, print_buffer, 58);

	if (ret == -1)
		return;
}

void run_test(struct graded_test *test)
{
	int res;

	res = test->function();
	print_test(test->description, res);
#ifdef EXIT_IF_FAIL
	exit(EXIT_FAILURE);
#endif
}

void run_tests(struct graded_test *tests, size_t count)
{
	size_t i;

	for (i = 0; i < count; i++)
		run_test(&tests[i]);
}
