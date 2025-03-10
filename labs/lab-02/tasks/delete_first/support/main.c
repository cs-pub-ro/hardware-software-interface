// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <stdlib.h>

#include "delete_first.h"

int main(void)
{
	char *s = "She sells seashells by the seashore";
	char *pattern = "se";

	char *res = delete_first(s, pattern);

	res ? puts(res) : puts("Implement function!");

	return 0;
}
