// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "len_xor.h"

int my_strlen(const char *str)
{
	int res;
	for(res = 0; *str; str++)
		res++;
	return res;
}

void equality_check(const char *str)
{
	int i, n;
	char c1, c2;
	n = my_strlen(str);
	for(i = 0; i < n; i++)
	{
		c1 = *(str + i);
		c2 = *(str + ((i + (1 << i)) % n));
		if(!(c1 ^ c2))
			printf("Address of %c: %p\n", c1, str + i);
	}
}
