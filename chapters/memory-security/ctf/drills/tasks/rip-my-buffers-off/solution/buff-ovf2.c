// SPDX-License-Identifier: BSD-3-Clause

#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#define MAXC 1000

char buff[] = "Hey";

void get_flag(void)
{
	const int start_offset = 5;
	unsigned int seed = 42;

	/* Here goes the obfuscated flag outputed by obfuscate.c */
	char *flag = "\x66\x3b\x70\x76\x76\x16\x2f\x4b\x38\x60\x4b\x31\x52\x5a\x3f\x37"
			 "\x20\x2b\x24\x21\x49\x01\x08\x45\x41\x19\x26\x40\x35\x7d\x25\x43"
			 "\x31\x70\x6d\x66\x56\x1e\x0a\x11\x07\x61\x07\x64\x37\x3d\x46\x31"
			 "\x0b\x43\x07\x1b\x7c\x4c\x0a\x61\x37\x70\x6c\x09\x70\x43\x54\x74"
			 "\x2d\x5d\x1a\x46\x34\x70\x24\x2b\x4f\x3d\x6d\x06\x16\x4d\x70\x4b"
			 "\x71";

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

void trampoline(void)
{
	unsigned int a = 1234567;
	char some_str[] = "That's what she said";

	fgets(some_str, 100, stdin);
	printf("%s's local variables:\n", __func__);
	printf("0x%x", a);
	for (int i = 0; i < strlen(some_str); i++)
		printf("%x", some_str[i]);
	printf("\n");
}

int main(void)
{
	trampoline();

	return 0;
}
