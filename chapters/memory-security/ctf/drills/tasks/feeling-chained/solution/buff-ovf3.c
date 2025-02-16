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

	if (my_other_global_var != 0x7890) {
		printf("You're cheating, mate. Try harder\n");
		return;
	}
	/* Here goes the obfuscated flag outputted by obfuscate.c */
	char *flag = "\x66\x3b\x70\x76\x76\x16\x2f\x4b\x38\x60\x4b\x31\x52\x5a\x4a\x37"
			 "\x20\x6c\x24\x21\x49\x5c\x08\x45\x41\x58\x39\x40\x35\x6f\x25\x43"
			 "\x31\x70\x6d\x71\x56\x1e\x0a\x11\x32\x61\x07\x64\x25\x0b\x4c\x31"
			 "\x0b\x43\x07\x0f\x7c\x4c\x0a\x6b\x37\x1d\x6c\x09\x70\x6a\x54\x5b"
			 "\x2d\x5d\x1a\x46\x31\x70\x24\x2b\x51\x2c\x6d\x06\x16\x47\x70\x4b"
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

void f3(int x)
{
	if (x == 13 && my_global_var == 0x1234) {
		my_other_global_var = 0x7890;
		get_flag();
	} else {
		printf("You missed something\n");
	}
}

void f2(void)
{
	printf("I dont do nothing\n");
}

void f1(int a, int b)
{
	if (a + b == 69) {
		printf("You're doing great\n");
		my_global_var = 0x1234;
	} else {
		printf("You got the params wrong\n");
	}
}

void gateway(void)
{
	char buff1[10];

	fgets(buff1, 300, stdin);
}

int main(void)
{
	gateway();

	return 0;
}
