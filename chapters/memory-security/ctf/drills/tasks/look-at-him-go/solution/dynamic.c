// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXC 1000

char *get_flag(void)
{
	const int start_offset = 5;
	unsigned int seed = 42;

	/* Here goes the obfuscated flag outputed by obfuscate.c */
	char *flag = "\x66\x3b\x70\x76\x76\x16\x2f\x4b\x38\x60\x4b\x31\x52\x5a\x7b\x37"
			 "\x20\x72\x24\x21\x49\x5e\x08\x45\x41\x05\x16\x40\x35\x7d\x25\x43"
			 "\x08\x70\x6d\x75\x56\x1e\x0a\x11\x01\x61\x07\x64\x0d\x2b\x6f\x31"
			 "\x0b\x43\x07\x1c\x7c\x52\x0a\x62\x37\x46\x6c\x09\x70\x52\x54\x7b"
			 "\x2d\x5d\x1a\x46\x26\x70\x24\x2b\x7e\x11\x6d\x06\x16\x61\x70\x4b"
			 "\x7b\x51\x7d\x17\x4d\x19\x27\x24\x0f\x09\x65\x18\x4f\x6b\x4b\x2c"
			 "\x49\x1b\x65\x74\x1a\x18\x5b\x17\x4e\x57\x16\x37\x57\x72\x53\x31"
			 "\x4c";

	int i = 0, cnt = 0;
	int iflag = 0;
	int garbage;
	char *res = (char *)calloc(MAXC, 1);
	char *fin = (char *)calloc(MAXC, 1);

	while (flag[iflag]) {
		garbage = rand_r(&seed) % 5;
		while (garbage--) {
			rand_r(&seed);
			++iflag;
		}
		res[i++] = (flag[iflag] - 1) ^ ((start_offset + iflag) % 128) ^ (rand_r(&seed) % 128);
		++iflag;
		++cnt;
		// Copying the string into another with a null character once every 5 characters
		if (i % 5 == 0 || !flag[iflag]) {
			strncpy(fin + i - cnt + i / 5, res + i - cnt, 5);
			// Covering our tracks
			memset(res + i - 5, 0, 5);
			cnt = 0;
		}
	}
	free(res);

	return fin;
}

int main(void)
{
	char buff1[100];
	char *buff2;
	int j = 0;

	buff2 = malloc(100);

	strcpy(buff1, "So close ");
	strcpy(buff2, "and yet so far...\n");

	buff1[9] = 0;
	buff2[19] = 0;

	char *flag = get_flag();
	// 13 doesn't have special meaning
	for (int i = 0; i < 13; i++) {
		if (!flag[i])
			continue;
		buff1[10 + j] = flag[i];
		j++;
	}
	j = 0;
	// 32 is the length of flag
	for (int i = 0; i < 32; i++) {
		if (!flag[i])
			continue;
		buff2[20 + j] = flag[i + 13];
		j++;
	}

	printf("%s%s", buff1, buff2);

	free(buff2);
	free(flag);

	return 0;
}
