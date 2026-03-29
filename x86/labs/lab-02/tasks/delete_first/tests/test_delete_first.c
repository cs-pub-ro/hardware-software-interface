// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>

#include "graded_test.h"

char *delete_first(char *s, char *pattern);

static int test_no_appearances(void)
{
	char sea[] = "She sells seashells by the seashore";
	char *pattern = "sly";

	char *res = delete_first(sea, pattern);

	return res ? !strcmp(res, sea) : 0;
}

static int test_one_appearance(void)
{
	char sea[] = "She sells";
	char *pattern = "se";
	char *res = delete_first(sea, pattern);

	return res ? !strcmp(res, "She lls") : 0;
}

static int test_multiple_appearances(void)
{
	char car[] = "Fuzzy Wuzzy was a bear, Fuzzy Wuzzy had no hair";
	char *pattern = "zzy";
	char *res = delete_first(car, pattern);

	return res ?
	!strcmp(res, "Fu Wuzzy was a bear, Fuzzy Wuzzy had no hair") : 0;
}


static struct graded_test all_tests[] = {
	{ test_no_appearances, "test_no_appearances", 33 },
	{ test_one_appearance, "test_one_appearance", 33},
	{ test_multiple_appearances, "test_multiple_appearances", 34},
};

int main(void)
{
	run_tests(all_tests, sizeof(all_tests) / sizeof(all_tests[0]));
	return 0;
}
