// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

static void win(void)
{
	puts("VICTORY!!!");
}

static void fail(void)
{
	puts("defeat!");
}

static void check_string(const char *str)
{
	unsigned int padding_ignoreme = 0x43484154;
	unsigned int flag = 0xCAFEBABE;
	char buffer[32];

	strcpy(buffer, str);

	// to keep variable from getting ignored by compiler
	padding_ignoreme++;

	if (flag == 0x35545047)  // 47 50 54 35 = G P T 5
		win();
	else
		fail();
}

int main(int argc, char **argv)
{
	if (argc != 2) {
		fprintf(stderr, "Usage: %s <string>\n", argv[0]);
		exit(EXIT_FAILURE);
	}

	check_string(argv[1]);

	return 0;
}
