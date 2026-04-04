// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "mirror.h"

int main(void)
{
	char test[] = "LoremIpsum";
	mirror(test);
	printf("%s", test);

	return 0;
}
