// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "len_xor.h"

int main(void)
{
	char *s = "aac";
 	printf("length = %d\n", my_strlen(s));
	equality_check(s);

	return 0;
}
