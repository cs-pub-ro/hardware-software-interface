// SPDX-License-Identifier: BSD-3-Clause

#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#include "graded_test.h"
#include "../support/rotate.h"

#define LEFT_OUT	"left.out"
#define LEFT_REF	"left.ref"
#define RIGHT_OUT	"right.out"
#define RIGHT_REF	"right.ref"
#define BOTH_OUT	"both.out"
#define BOTH_REF	"both.ref"

static void write_file(char *file_name, char *buf, int bytes)
{
	int out_fd;

	out_fd = open(file_name, O_RDWR | O_CREAT | O_TRUNC | O_SYNC, 0644);
	if (out_fd < 0) {
		perror("open() failed");
		exit(-1);
	}

	write(out_fd, buf, bytes);
	close(out_fd);
}

static void my_itoa(char *buf, unsigned int a)
{
	int len = 0, i, j;
	char aux;

	while (a) {
		buf[len++] = '0' + a % 10;
		a /= 10;
	}
	buf[len] = '\0';
	i = 0;
	j = len - 1;

	while (i < j) {
		aux = buf[i];
		buf[i++] = buf[j];
		buf[j--] = aux;
	}
}

static int test_rotate_left(void)
{
	unsigned int number = 0x80000000;
	int bits = 1;
	char *src = malloc(11);

	rotate_left(&number, bits);
	my_itoa(src, number);

	write_file(LEFT_OUT, src, strlen(src));
	write_file(LEFT_REF, "1", 1);

	free(src);
	return number == 1;
}

static int test_rotate_right(void)
{
	unsigned int number = 0x00000001;
	int bits = 16;
	char *src = malloc(11);

	rotate_right(&number, bits);
	my_itoa(src, number);

	write_file(RIGHT_OUT, src, strlen(src));
	write_file(RIGHT_REF, "65536", 5);

	free(src);
	return number == 65536;
}

static int test_rotate_both(void)
{
	unsigned int number = 0x00000011;
	int bits = 2;
	char *src = malloc(11);

	rotate_right(&number, bits);
	rotate_left(&number, bits + 1);
	my_itoa(src, number);

	write_file(BOTH_OUT, src, strlen(src));
	write_file(BOTH_REF, "34", 2);

	free(src);
	return number == 34;
}

static struct graded_test all_tests[] = {
	{ test_rotate_left, "test_rotate_left", 33 },
	{ test_rotate_right, "test_rotate_right", 33 },
	{ test_rotate_both, "test_rotate_both", 34 },
};

int main(void)
{
	run_tests(all_tests, sizeof(all_tests) / sizeof(all_tests[0]));

	return 0;
}
