// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <stdlib.h>
#define MAXC 1000

void get_flag(void)
{
	const int start_offset = 5;
	unsigned int seed = 42;

	/* Here goes the obfuscated flag outputted by obfuscate.c */
	char *flag = "\x66\x3b\x70\x76\x76\x16\x2f\x4b\x38\x60\x4b\x31\x52\x5a\x5a\x37"
			 "\x20\x6a\x24\x21\x49\x72\x08\x45\x41\x1a\x25\x40\x35\x55\x25\x43"
			 "\x1c\x70\x6d\x7a\x56\x1e\x0a\x11\x0c\x61\x07\x64\x0d\x08\x51\x31"
			 "\x0b\x43\x07\x1e\x7c\x53\x0a\x52\x37\x59\x6c\x09\x70\x54\x54\x61"
		 "\x2d\x5d\x1a\x46\x35\x70\x24\x2b\x60";

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
