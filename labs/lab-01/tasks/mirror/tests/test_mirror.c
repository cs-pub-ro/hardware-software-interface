// SPDX-License-Identifier: BSD-3-Clause

#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#include "graded_test.h"
#include "../support/mirror.h"

#define SMALL_OUT	"small.out"
#define SMALL_REF	"small.ref"
#define MEDIUM_OUT	"medium.out"
#define MEDIUM_REF	"medium.ref"
#define BIG_OUT		"big.out"
#define BIG_REF		"big.ref"

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

static int my_diff(char *file1, char *file2)
{
	char *s1 =  calloc(BUFSIZ, 1), *s2 = calloc(BUFSIZ, 1);
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

static void my_strrev(char *s)
{
	int len = strlen(s);
	int i = 0, j = len - 1;
	char aux;

	while (i < j) {
		aux = s[i];
		s[i] = s[j];
		s[j] = aux;
		i++;
		j--;
	}
}

static int test_small_string(void)
{
	char *src = strdup("overflow");
	char *dest = strdup("overflow");
	int rc;

	my_strrev(src);
	write_file(SMALL_REF, src, 8);

	mirror(dest);
	write_file(SMALL_OUT, dest, 8);

	rc = my_diff(SMALL_OUT, SMALL_REF);

	return !rc ? 1 : 0;
}

static int test_medium_string(void)
{
	char *src = strdup("Little-Endian");
	char *dest = strdup("Little-Endian");
	int rc;

	my_strrev(src);
	write_file(MEDIUM_REF, src, 13);

	mirror(dest);
	write_file(MEDIUM_OUT, dest, 13);

	rc = my_diff(MEDIUM_OUT, MEDIUM_REF);

	return !rc ? 1 : 0;
}

static int test_big_string(void)
{
	char *src = strdup("Triedru tridreptunghic in triunghiuri triughiulare triangula un tiedru tridreptunghic.");
	char *dest = strdup("Triedru tridreptunghic in triunghiuri triughiulare triangula un tiedru tridreptunghic.");
	int rc;

	my_strrev(src);
	write_file(BIG_REF, src, 86);

	mirror(dest);
	write_file(BIG_OUT, dest, 86);

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
