// SPDX-License-Identifier: BSD-3-Clause

#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#include "graded_test.h"
#include "../support/len_xor.h"

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

static void xor_check(const char *str)
{
	int i, n;
	char curr_char, check_char;

	n = my_strlen(str);
	for (i = 0; i < n; ++i) {
		curr_char = *(str + i);
		check_char = *(str + ((i + (1 << i)) % n));
		if (!(curr_char ^ check_char))
			printf("Address of %c: %p\n", curr_char, str + i);
	}
	printf("\n");
}

static int my_diff(char *file1, char *file2)
{
	char *s1 = calloc(BUFSIZ, 1), *s2 = calloc(BUFSIZ, 1);
	int fd1, fd2, rc;

	fd1 = open(file1, O_RDWR, 0644);
	if (fd1 < 0) {
		perror("open() failed");
		exit(-1);
	}

	fd2 = open(file2, O_RDWR, 0644);
	if (fd2 < 0) {
		perror("open() failed");
		exit(-1);
	}

	lseek(fd1, 0, SEEK_SET);
	read_buffer(fd1, s1, BUFSIZ);

	lseek(fd2, 0, SEEK_SET);
	read_buffer(fd2, s2, BUFSIZ);

	rc = strcmp(s1, s2);
	free(s1);
	free(s2);
	close(fd1);
	close(fd2);

	return rc;
}

static int test_small_string(void)
{
	char *s = strdup("aaha");
	int len, rc;

	len = my_strlen(s);
	redirect_stdout(SMALL_OUT);

	printf("len(\"%s\") = %d\n", s, len);
	equality_check(s);
	fflush(stdout);

	restore_stdout();

	redirect_stdout(SMALL_REF);

	printf("len(\"%s\") = %ld\n", s, strlen(s));
	xor_check(s);
	fflush(stdout);

	restore_stdout();
	if (len != 4)
		return 0;
	rc = my_diff(SMALL_OUT, SMALL_REF);

	return !rc ? 1 : 0;
}

static int test_medium_string(void)
{
	char *s = strdup("paragarafaramus");
	int len, rc;

	len = my_strlen(s);
	redirect_stdout(MEDIUM_OUT);

	printf("len(\"%s\") = %d\n", s, len);
	equality_check(s);
	fflush(stdout);

	restore_stdout();

	redirect_stdout(MEDIUM_REF);

	printf("len(\"%s\") = %ld\n", s, strlen(s));
	xor_check(s);
	fflush(stdout);

	restore_stdout();
	if (len != 15)
		return 0;
	rc = my_diff(MEDIUM_OUT, MEDIUM_REF);

	return !rc ? 1 : 0;
}

static int test_big_string(void)
{
	char *s = strdup("ababababacccbacbacbacbacbabc");
	int len, rc;

	len = my_strlen(s);
	redirect_stdout(BIG_OUT);

	printf("len(\"%s\") = %d\n", s, len);
	equality_check(s);
	fflush(stdout);

	restore_stdout();

	redirect_stdout(BIG_REF);

	printf("len(\"%s\") = %ld\n", s, strlen(s));
	xor_check(s);
	fflush(stdout);

	restore_stdout();
	if (len != 28)
		return 0;
	rc = my_diff(BIG_OUT, BIG_REF);

	return !rc ? 1 : 0;
}


static struct graded_test all_tests[] = {
	{ test_small_string, "test_small_string", 33 },
	{ test_medium_string, "test_medium_string", 33 },
	{ test_big_string, "test_big_string", 34 },
};

int main(void)
{
	run_tests(all_tests, sizeof(all_tests) / sizeof(all_tests[0]));

	return 0;
}
