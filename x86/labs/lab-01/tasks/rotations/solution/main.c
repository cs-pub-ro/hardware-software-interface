// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "rotate.h"

int main(void)
{
	unsigned int number;

	number = 0x80000000;
	rotate_left(&number, 1);
	printf("After left rotation:   %d\n", number);

	number = 0x00000001;
	rotate_right(&number, 16);
	printf("After right rotation:  %d\n", number);

	return 0;
}
