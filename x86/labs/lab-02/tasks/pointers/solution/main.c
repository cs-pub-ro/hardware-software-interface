// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <assert.h>
#include <stdlib.h>

#include "pointers.h"

int main(void)
{
	char s1[] = "Abracadabra";
	char s2[] = "Abracababra";
	char src[] = "Learn HSI, you must!";
	char *dest = malloc(sizeof(src));

	/* testing */
	assert(SIGN(my_strcmp(s1, s2)) == SIGN(strcmp(s1, s2)));
	assert(my_memcpy(dest, src, sizeof(src)) == memcpy(dest, src, sizeof(src)));
	assert(my_strcpy(dest, src) == strcpy(dest, src));

	free(dest);

	return 0;
}
