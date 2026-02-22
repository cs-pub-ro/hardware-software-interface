// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "mirror.h"

char *new_string(const char *cont_str)
{
	char *res;

	res = calloc(STR_SIZE, sizeof(char));
	strcpy(res, cont_str);

	return res;
}

int my_strlen(const char *str)
{
	int res;

	for (res = 0; *str; ++str)
		++res;

	return res;
}

void mirror(char *s)
{
	int len, i, mirror_idx;
	char aux;

	len = my_strlen(s);

	for (i = 0; i < (len >> 1); ++i) {
		mirror_idx = len - i - 1;
		aux = *(s + i);
		*(s + i) = *(s + mirror_idx);
		*(s + mirror_idx) = aux;
	}
}
