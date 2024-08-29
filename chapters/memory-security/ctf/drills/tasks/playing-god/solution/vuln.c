// SPDX-License-Identifier: BSD-3-Clause

#include <stdlib.h>
#include <stdio.h>

#define MAXC 1000

void get_flag(void)
{
	const int start_offset = 5;
	unsigned int seed = 42;

	/* Here goes the obfuscated flag outputed by obfuscate.c */
	char *flag = "\x66\x3b\x70\x76\x76\x16\x2f\x4b\x38\x60\x4b\x31\x52\x5a\x3f\x37"
			 "\x20\x2b\x24\x21\x49\x01\x08\x45\x41\x05\x23\x40\x35\x6f\x25\x43"
			 "\x17\x70\x6d\x4f\x56\x1e\x0a\x11\x1f\x61\x07\x64\x27\x10\x5e\x31"
			 "\x0b\x43\x07\x31\x7c\x55\x0a\x6c\x37\x70\x6c\x09\x70\x55\x54\x74"
			 "\x2d\x5d\x1a\x46\x33\x70\x24\x2b\x4a\x07\x6d\x06\x16\x57\x70\x4b"
			 "\x64\x51\x7d\x17\x51";

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

int main(void)
{
	unsigned int seed = 42;
	int real_num, guess;

	real_num = rand_r(&seed) % 100000;

	scanf("%d", &guess);

	if (guess == real_num)
		get_flag();
	else
		printf("Try again\n");

	return 0;
}
