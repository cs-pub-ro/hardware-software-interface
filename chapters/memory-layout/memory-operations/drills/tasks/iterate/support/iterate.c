// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>

/**
 * Display the addresses of the elements in the "v" array
 * along with their values.
 * Traverse the addresses, one by one, byte by byte, then two by two bytes,
 * and then four by four.
 */
int main(void)
{
	int v[] = {0xCAFEBABE, 0xDEADBEEF, 0x0B00B135, 0xBAADF00D, 0xDEADC0DE};

	(void) v;

	return 0;
}
