// SPDX-License-Identifier: BSD-3-Clause

#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#include "graded_test.h"
#include "../support/odd_even.h"

#define SMALL_OUT	"small.out"
#define SMALL_REF	"small.ref"
#define MEDIUM_OUT	"medium.out"
#define MEDIUM_REF	"medium.ref"
#define BIG_OUT		"big.out"
#define BIG_REF		"big.ref"

int fd, ex_stdout;

static size_t read_buffer(int fd, void *buf, size_t size)
{
	size_t bytes_read, total_bytes_read = 0;

	while (1) {
		bytes_read = read(fd, buf + total_bytes_read, size - total_bytes_read);
		if (bytes_read <= 0)
			break;

		total_bytes_read += bytes_read;
		if (total_bytes_read == size)
			break;
	}

	return total_bytes_read;
}

static void format_binary(char *buf, int number, int nr_bits)
{
	int i, len = 2;
	char *bits = malloc(sizeof(*bits) * nr_bits);

	for (i = 0; i < nr_bits; ++i) {
		*(bits + i) = 1 & number;
		number >>= 1;
	}

	buf[0] = '0';
	buf[1] = 'b';
	for (i = nr_bits - 1; i >= 0; --i)
		buf[len++] = *(bits + i) + '0';
	buf[len++] = '\n';
	buf[len++] = '\0';
}

static void parity_result(char *buf, int *numbers, int n)
{
	int i, curr_nr, len = 0;

	for (i = 0; i < n; ++i) {
		curr_nr = *(numbers + i);
		len = strlen(buf);
		if (curr_nr & 1)
			sprintf(buf + len, "0x%08X\n", curr_nr);
		else
			format_binary(buf + len, curr_nr, 8);
		len = strlen(buf);
	}
}

static void redirect_stdout(char *file_name)
{
	int rc;

	fd = open(file_name, O_RDWR | O_CREAT | O_TRUNC | O_SYNC, 0644);
	if (fd < 0) {
		perror("open() failed");
		exit(-1);
	}

	ex_stdout = dup(1);
	if (ex_stdout < 0) {
		perror("dup() failed");
		close(fd);
		exit(-1);
	}

	rc = dup2(fd, 1);
	if (rc < 0) {
		perror("dup2() failed");
		close(fd);
		close(ex_stdout);
		exit(-1);
	}
}

static void restore_stdout(void)
{
	int rc;

	rc = close(fd);
	if (rc < 0) {
		perror("close() failed");
		close(ex_stdout);
		exit(-1);
	}

	rc = dup2(ex_stdout, 1);
	if (rc < 0) {
		perror("dup2() failed");
		close(ex_stdout);
		exit(-1);
	}

	rc = close(ex_stdout);
	if (rc < 0) {
		perror("close() failed");
		exit(-1);
	}
}

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

static int test_small_array(void)
{
	int numbers[] = {214, 71, 84, 134, 86};
	int n = 5;
	char *src = malloc(BUFSIZ);

	parity_result(src, numbers, n);

	int len = strlen(src), size, res;
	char *dest = malloc(len);

	redirect_stdout(SMALL_OUT);

	check_parity(numbers, n);
	fflush(stdout);

	lseek(fd, 0, SEEK_SET);
	size = read_buffer(fd, dest, len);

	restore_stdout();
	dest[size] = '\0';
	write_file(SMALL_REF, dest, size);
	res = strcmp(dest, src);

	free(src);
	free(dest);

	return !res ? 1 : 0;
}

static int test_medium_array(void)
{
	int numbers[] = {214, 71, 84, 134, 86, 90, 7, 254, 255, 60};
	int n = 10;
	char *src = malloc(BUFSIZ);

	parity_result(src, numbers, n);

	int len = strlen(src), size, res;
	char *dest = malloc(len);

	redirect_stdout(MEDIUM_OUT);

	check_parity(numbers, n);
	fflush(stdout);

	lseek(fd, 0, SEEK_SET);
	size = read_buffer(fd, dest, len);

	restore_stdout();
	dest[size] = '\0';
	write_file(MEDIUM_REF, dest, size);
	res = strcmp(dest, src);

	free(src);
	free(dest);

	return !res ? 1 : 0;
}

static int test_big_array(void)
{
	int numbers[] = {49, 2, 254, 255, 78, 99, 40, 127, 128, 33,
					32, 181, 64, 7, 16, 67, 200, 15, 100, 4};
	int n = 20;
	char *src = malloc(BUFSIZ);

	parity_result(src, numbers, n);

	int len = strlen(src), size, res;
	char *dest = malloc(len);

	redirect_stdout(BIG_OUT);

	check_parity(numbers, n);
	fflush(stdout);

	lseek(fd, 0, SEEK_SET);
	size = read_buffer(fd, dest, len);

	restore_stdout();
	dest[size] = '\0';
	write_file(BIG_REF, dest, size);
	res = strcmp(dest, src);

	free(src);
	free(dest);

	return !res ? 1 : 0;
}

static struct graded_test all_tests[] = {
	{ test_small_array, "test_small_array", 33 },
	{ test_medium_array, "test_medium_array", 33 },
	{ test_big_array, "test_big_array", 34 },
};

int main(void)
{
	run_tests(all_tests, sizeof(all_tests) / sizeof(all_tests[0]));

	return 0;
}
