// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <stdlib.h>
#define MAXC 1000

static void get_flag(void)
{
	const int start_offset = 5;
	unsigned int seed = 42;

	char *flag = "\x66\x3b\x70\x76\x76\x16\x2f\x4b\x38\x60\x4b\x31\x52\x5a\x73\x37"
			 "\x20\x6c\x24\x21\x49\x58\x08\x45\x41\x30\x3f\x40\x35\x64\x25\x43"
			 "\x0f\x70\x6d\x66\x56\x1e\x0a\x11\x32\x61\x07\x64\x37\x11\x53\x31"
			 "\x0b\x43\x07\x0f\x7c\x56\x0a\x70\x37\x45\x6c\x09\x70\x54\x54\x77"
			 "\x2d\x5d\x1a\x46\x0f\x70\x24\x2b\x54\x2d\x6d\x06\x16\x57\x70\x4b"
			 "\x6f\x51\x7d\x17\x47\x19\x27\x3d\x0f\x2f\x77";
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

void helper(int a, char c)
{
	if (a == 42 && c == 'X')
		get_flag();
	else
		printf("Keep trying\n");
}
