// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <stdlib.h>
#define MAXC 1000

const int start_offset = 5;
unsigned int seed = 42;

unsigned char *obfuscate(unsigned char *s)
{
	int i = 0;
	int garbage;
	unsigned char *res = (unsigned char *) malloc(10 * MAXC);

	while (*s) {
		garbage = rand_r(&seed) % 5;
		while (garbage--)
			res[i++] = rand_r(&seed) % 127 + 1;
		res[i] = ((*s) ^ ((start_offset + i) % 128) ^ (rand_r(&seed) % 128)) + 1;
		++i;
		++s;
	}
	res[i] = 0;

	return res;
}

int main(void)
{
	unsigned char s[MAXC];

	scanf("%s", s);

	unsigned char *s_obfuscated = obfuscate(s);
	unsigned char *p = s_obfuscated;

	while (*p) {
		printf("\\x%02x", *p);
		++p;
	}

	free(s_obfuscated);

	return 0;
}
