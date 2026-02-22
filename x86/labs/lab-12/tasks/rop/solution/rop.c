// SPDX-License-Identifier: BSD-3-Clause

#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#define MAXC 1000

static int my_global_var;
static int my_other_global_var;

void get_flag(void)
{
	const int start_offset = 5;
	unsigned int seed = 42;

	if (my_other_global_var != 0x1234) {
		printf("You're cheating, mate. Try harder\n");
		return;
	}
	/* Here goes the obfuscated flag outputted by obfuscate.c */
	char *flag = "\x66\x3b\x70\x76\x76\x16\x2f\x4b\x38\x60\x4b\x31\x52\x5a\x6a\x37"
			 "\x20\x6c\x24\x21\x49\x5c\x08\x45\x41\x30\x3f\x40\x35\x6b\x25\x43"
			 "\x04\x70\x6d\x7b\x56\x1e\x0a\x11\x08\x61\x07\x64\x3e\x05\x6f\x31"
			 "\x0b\x43\x07\x1c\x7c\x57\x0a\x52\x37\x5e\x6c\x09\x70\x54\x54\x2e"
			 "\x2d\x5d\x1a\x46\x2d";

	int i = 0;
	int iflag = 0;
	int garbage;
	char *res = (char *)malloc(MAXC);

	while (flag[iflag]) {
		garbage = rand_r(&seed) % 5;
		while (garbage--) {
			rand_r(&seed);
			++iflag;
		}
		res[i++] = (flag[iflag] - 1) ^ ((start_offset + iflag) % 128) ^ (rand_r(&seed) % 128);
		++iflag;
	}
	res[i] = 0;

	puts(res);
}

void special_function(int x, int y)
{
	if (x == 6 && y == 9) {
		my_other_global_var = 0x1234;
		get_flag();
	} else {
		printf("You missed something\n");
	}
}

int main(void)
{
	char buf[16];

	fgets(buf, 100, stdin);

	return 0;
}
