// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "len_xor.h"

int main(void)
{
	char *str;

	str = new_string("ababababacccbacbacbacbacbabc");

	printf("len(\"%s\") = %d\n", str, my_strlen(str));
	equality_check(str);

	// free memory
	free(str);

	return 0;
}
