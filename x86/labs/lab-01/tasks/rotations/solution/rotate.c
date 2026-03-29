// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

#include "rotate.h"

void rotate_left(unsigned int *number, int bits)
{
	unsigned int bit_mask = -1;

	bit_mask <<= (sizeof(*number) * 8 - bits);
	bit_mask &= (*number);
	bit_mask >>= (sizeof(*number) * 8 - bits);
	(*number) <<= bits;
	(*number) |= bit_mask;
}

void rotate_right(unsigned int *number, int bits)
{
	unsigned int bit_mask = -1;

	bit_mask >>= (sizeof(*number) * 8 - bits);
	bit_mask &= (*number);
	bit_mask <<= (sizeof(*number) * 8 - bits);
	(*number) >>= bits;
	(*number) |= bit_mask;
}
