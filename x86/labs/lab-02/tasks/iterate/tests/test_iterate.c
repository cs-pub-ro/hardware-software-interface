// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <sys/param.h>
#include <unistd.h>
#include <fcntl.h>

#include "graded_test.h"
#include "../support/iterate.h"
#include "../solution/iterate.h"

#define CHAR_OUTPUT "char.out"
#define SHORT_OUTPUT "short.out"
#define INT_OUTPUT "int.out"
#define CHAR_REF "char.ref"
#define SHORT_REF "short.ref"
#define INT_REF "int.ref"

static int fd, stdout_fd;

static void prep_io(const char *test_ref)
{
	int rc;

	fd = open(test_ref, O_CREAT | O_RDWR | O_TRUNC, 0644);
	if (fd < 0) {
		perror("open() failed");
		exit(EXIT_FAILURE);
	}

	stdout_fd = dup(STDOUT_FILENO);
	if (stdout_fd < 0) {
		perror("dup() failed");
		exit(EXIT_FAILURE);
	}

	rc = dup2(fd, STDOUT_FILENO);
	if (rc < 0) {
		perror("dup2() failed");
		exit(EXIT_FAILURE);
	}

	rc = close(fd);
	if (rc < 0) {
		perror("close() failed");
		exit(EXIT_FAILURE);
	}
}

static void restore_io(void)
{
	int rc;

	rc = dup2(stdout_fd, STDOUT_FILENO);
	if (rc < 0) {
		perror("dup2() failed");
		exit(EXIT_FAILURE);
	}

	rc = close(stdout_fd);
	if (rc < 0) {
		perror("close() failed");
		exit(EXIT_FAILURE);
	}
}

static int test_chars(void)
{
	int status;

	prep_io(CHAR_OUTPUT);
	print_chars();
	fflush(stdout);
	restore_io();

	prep_io(CHAR_REF);
	print_chars_ref();
	fflush(stdout);
	restore_io();

	status = system("diff -q " CHAR_OUTPUT " " CHAR_REF);
	return status == 0 ? 1 : 0;
}

static int test_shorts(void)
{
	int status;

	prep_io(SHORT_OUTPUT);
	print_shorts();
	fflush(stdout);
	restore_io();

	prep_io(SHORT_REF);
	print_shorts_ref();
	fflush(stdout);
	restore_io();

	status = system("diff -q " SHORT_OUTPUT " " SHORT_REF);
	return status == 0 ? 1 : 0;
}

static int test_ints(void)
{
	int status;

	prep_io(INT_OUTPUT);
	print_ints();
	fflush(stdout);
	restore_io();

	prep_io(INT_REF);
	print_ints_ref();
	fflush(stdout);
	restore_io();

	status = system("diff -q " INT_OUTPUT " " INT_REF);
	return status == 0 ? 1 : 0;
}

static struct graded_test all_tests[] = {
	{ test_chars, "test_chars", 33 },
	{ test_shorts, "test_shorts", 33},
	{ test_ints, "test_ints", 34},
};

int main(void)
{
	run_tests(all_tests, sizeof(all_tests) / sizeof(all_tests[0]));
	return 0;
}
