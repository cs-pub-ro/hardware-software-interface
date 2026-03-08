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

	/* Here goes the obfuscated flag outputted by obfuscate.c */
	char *flag = "\x66\x3b\x70\x76\x76\x16\x2f\x4b\x38\x60\x4b\x31\x52\x5a\x68\x37"
			 "\x20\x62\x24\x21\x49\x43\x08\x45\x41\x1d\x16\x40\x35\x7d\x25\x43"
			 "\x0b\x70\x6d\x7e\x56\x1e\x0a\x11\x03\x61\x07\x64\x0d\x15\x55\x31"
			 "\x0b\x43\x07\x04\x7c\x56\x0a\x23\x37\x1f\x6c\x09\x70\x19\x54\x3d"
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

void check_static_var(void)
{
	if (!strcmp(buff, "Bye"))
		get_flag();
	else
		printf("Try again\n");
}

int main(void)
{
	char local_buff[10];
	char message[10];

	fgets(message, 20, stdin);
	strcpy(buff, local_buff);

	check_static_var();

	return 0;
}
