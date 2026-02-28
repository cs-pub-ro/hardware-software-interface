// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <sys/wait.h>

#include "graded_test.h"

static int test_part2(void)
{
	FILE *pipe = popen("../support/stack_buffer", "r");

	if (!pipe) {
		perror("popen failed");
		return 0;
	}

	char buffer[512];

	if (!fgets(buffer, sizeof(buffer), pipe)) {
		pclose(pipe);
		return 0;
	}

	pclose(pipe);

	char *data_start = buffer;

	data_start += strlen("buffer is: ");

	char bytes[128][5];
	int num_bytes = 0;
	char *save_ptr = NULL;

	char *token = strtok_r(data_start, " ", &save_ptr);

	while (token != NULL && num_bytes < 128) {
		strncpy(bytes[num_bytes], token, 4);
		bytes[num_bytes][4] = '\0';
		num_bytes++;
		token = strtok_r(NULL, " ", &save_ptr);
	}

	if (num_bytes != 76)
		return 0;

	if (!strcmp(bytes[67], "DE") && !strcmp(bytes[66], "AD"))
		if (!strcmp(bytes[65], "BE") && !strcmp(bytes[64], "EF"))
			return 1;

	return 0;
}


static int test_part3(void)
{
	FILE *pipe = popen("../support/stack_buffer", "r");

	if (!pipe) {
		perror("popen failed");
		return 0;
	}

	int found = 1;
	char buffer[512];

	if (!fgets(buffer, sizeof(buffer), pipe)) {
		pclose(pipe);
		return 0;
	}

	if (!fgets(buffer, sizeof(buffer), pipe)) {
		pclose(pipe);
		return 0;
	}

	pclose(pipe);

	if (!strstr(buffer, "DEADBEEF"))
		found = 0;

	return found;
}

static struct graded_test all_tests[] = {
	{ test_part2, "test_part2", 50},
	{ test_part3, "test_part3", 50},
};

int main(void)
{
	run_tests(all_tests, sizeof(all_tests) / sizeof(all_tests[0]));
	return 0;
}
