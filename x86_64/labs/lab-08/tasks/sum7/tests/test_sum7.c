// SPDX-License-Identifier: BSD-3-Clause

#include <string.h>
#include <stdio.h>
#include <stdlib.h>
#include "graded_test.h"

extern long sum7(long a, long b, long c, long d, long e, long f, long g);

#define OUTPUT_BUFFER_SIZE 1024

/* reverse:  reverse string s in place */
void reverse(char s[])
{
	int i, j;
	char c;

	for (i = 0, j = strlen(s)-1; i < j; i++, j--) {
		c = s[i];
		s[i] = s[j];
		s[j] = c;
	}
}

void itoa(long n, char s[])
{
	long i, sign;

	sign = n;

	if (n < 0)
		n = -n;
	i = 0;
	do {
		s[i++] = n % 10 + '0';
	} while ((n /= 10) > 0);
	if (sign < 0)
		s[i++] = '-';
	s[i] = '\0';
	reverse(s);
}

static int check_print_output(long a, long b, long c, long d, long e, long f, long g, char *res)
{
	char buffer[OUTPUT_BUFFER_SIZE] = {0};

	long output = sum7(a, b, c, d, e, f, g);

	// get the string representation of the output
	itoa(output, buffer);

	return strcmp(buffer, res) == 0;
}

static int test_sum_byte(void)
{
	return check_print_output(1, 2, 3, 4, 5, 6, 7, "28");
}

static int test_sum_word(void)
{
	return check_print_output(195, 196, 187, 198, 199, 200, 201, "1376");
}

static int test_sum_dword(void)
{
	return check_print_output(65536, 65537, 65538, 65539, 65540, 65541, 65542, "458773");
}

static int test_sum_qword(void)
{
	return check_print_output(4294967296, 4294967297, 4294967298, 4294967299, 4294967300, 4294967301, 4294967302,
								"30064771093");
}

static struct graded_test all_tests[] = {
	{ test_sum_byte, "test_sum_byte", 15 },
	{ test_sum_word, "test_sum_word", 20 },
	{ test_sum_dword, "test_sum_dword", 30 },
	{ test_sum_qword, "test_sum_qword", 35 }
};

int main(void)
{
	run_tests(all_tests, sizeof(all_tests) / sizeof(all_tests[0]));
	return 0;
}
