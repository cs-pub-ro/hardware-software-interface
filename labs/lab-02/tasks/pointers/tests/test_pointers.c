// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <sys/param.h>
#include <assert.h>

#include "graded_test.h"
#include "pointers.h"

static int test_strcmp_equal(void)
{
	return my_strcmp("hello", "hello") == 0;
}

static int test_strcmp_diff(void)
{
	return my_strcmp("Andrei", "Andrew") < 0 ? 1 : 0;
}

static int test_strcmp_diff2(void)
{
	return my_strcmp("Anna", "anna") < 0 ? 1 : 0;
}

static int test_memcpy_basic(void)
{
	char src[] = "Hello, world!";
	char dest[14];

	my_memcpy(dest, src, 14);

	return my_strcmp(dest, src) == 0 ? 1 : 0;
}

static int test_memcpy_partial(void)
{
	char src[] = "123456789";
	char dest[10] = {0};

	my_memcpy(dest, src, 5);

	return strncmp(dest, "12345", 5) == 0 ? 1 : 0;
}

static int test_memcpy_struct(void)
{
	struct data {
		int a;
		float b;
	} src = {42, 3.14}, dest;

	my_memcpy(&dest, &src, sizeof(struct data));

	return ((dest.a == src.a) && (dest.b == src.b)) ? 1 : 0;
}

static int test_memcpy_overlap(void)
{
	char buffer[] = "abcdefghij";

	my_memcpy(buffer + 2, buffer, 5);

	return strncmp(buffer, "ababcdehij", 10) == 0 ? 1 : 0;
}

static int test_strcpy_basic(void)
{
	char src[] = "Test strcpy";
	char dest[20];

	my_strcpy(dest, src);

	return my_strcmp(dest, src) == 0 ? 1 : 0;
}

static int test_strcpy_empty(void)
{
	char src[] = "";
	char dest[10];

	my_strcpy(dest, src);

	return my_strcmp(dest, "") == 0 ? 1 : 0;
}

static int test_strcpy_long_string(void)
{
	char src[1000];
	char dest[1000];

	memset(src, 'A', sizeof(src) - 1);
	src[sizeof(src) - 1] = '\0';

	my_strcpy(dest, src);

	return my_strcmp(dest, src) == 0 ? 1 : 0;
}

static struct graded_test all_tests[] = {
	{ test_strcmp_equal, "test_strcmp_equal", 10 },
	{ test_strcmp_diff, "test_strcmp_diff", 10},
	{ test_strcmp_diff2, "test_strcmp_diff2", 10},
	{ test_memcpy_basic, "test_memcpy_basic", 10},
	{ test_memcpy_partial, "test_memcpy_partial", 10},
	{ test_memcpy_struct, "test_memcpy_struct", 10},
	{ test_memcpy_overlap, "test_memcpy_overlap", 10},
	{ test_strcpy_basic, "test_strcpy_basic", 10},
	{ test_strcpy_empty, "test_strcpy_empty", 10},
	{ test_strcpy_long_string, "test_strcpy_long_string", 10},
};

int main(void)
{
	run_tests(all_tests, sizeof(all_tests) / sizeof(all_tests[0]));
	return 0;
}
