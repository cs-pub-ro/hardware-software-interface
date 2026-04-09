// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <sys/wait.h>

#include "graded_test.h"

static int test(void)
{
	FILE *pipe = popen("python3 ../support/exploit.py", "r");

	if (!pipe)
		return 0;

	char buffer[512];
	int found = 0;

	while (fgets(buffer, sizeof(buffer), pipe))
		if (strstr(buffer, "Full of win!") != NULL)
			found = 1;

	return found;
}

static struct graded_test all_tests[] = {
	{ test, "test", 100},
};

int main(void)
{
	run_tests(all_tests, sizeof(all_tests) / sizeof(all_tests[0]));
	return 0;
}
