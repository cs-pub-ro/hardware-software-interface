// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "mirror.h"

int main(void)
{
	char *s;

	s = new_string("AnaAreMere");
	printf("mirror(\"%s\") = ", s);
	mirror(s);
	printf("\"%s\"\n", s);
	free(s);
	s = NULL;

	s = new_string("asdfghjl");
	printf("mirror(\"%s\") = ", s);
	mirror(s);
	printf("\"%s\"\n", s);
	free(s);
	s = NULL;

	s = new_string("qwerty");
	printf("mirror(\"%s\") = ", s);
	mirror(s);
	printf("\"%s\"\n", s);
	free(s);
	s = NULL;

	return 0;
}
