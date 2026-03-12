// SPDX-License-Identifier: BSD-3-Clause

#include "iterate.h"

/**
 * Display the addresses of the elements in the "v" array (declared in array.c)
 * along with their values.
 * Traverse the addresses, one by one, byte by byte, then two by two bytes,
 * and then four by four.
 */
int main(void)
{
	print_chars_ref();
	print_shorts_ref();
	print_ints_ref();

	return 0;
}
