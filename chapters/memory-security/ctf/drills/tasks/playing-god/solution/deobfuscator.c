// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXC 1000

void hex_to_bytes(const char *hex_str, unsigned char *bytes, int *len)
{
	const char *pos = hex_str;
	*len = 0;

	int ret;

	while (*pos && *(pos + 1)) {
		if (*pos == '\\' && *(pos + 1) == 'x') {
			ret = sscanf(pos + 2, "%2hhx", &bytes[*len]);
			if (ret != 1)
				exit(EXIT_FAILURE);
			(*len)++;
			pos += 4;
		} else {
			pos++;
		}
	}
}

void get_flag(unsigned char *flag, int len)
{
	const int start_offset = 5;
	unsigned int seed = 42;
	int i = 0, iflag = 0, garbage;
	unsigned char *res = (unsigned char *) malloc(MAXC);

	while (iflag < len) {
		garbage = rand_r(&seed) % 5;
		while (garbage--) {
			rand_r(&seed);
			++iflag;
		}

		res[i++] = (flag[iflag] - 1) ^ ((start_offset + iflag) % 128) ^ (rand_r(&seed) % 128);
		++iflag;
	}
	res[i] = 0;

	puts((const char *)res);
	free(res);
}

int main(void)
{
	char hex_input[MAXC];
	unsigned char flag[MAXC];
	int len;

	printf("Enter the obfuscated flag (e.g. \\x66\\x3b...): ");
	fgets(hex_input, MAXC, stdin);

	hex_to_bytes(hex_input, flag, &len);

	get_flag(flag, len);

	return 0;
}
