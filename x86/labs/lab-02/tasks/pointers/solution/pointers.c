// SPDX-License-Identifier: BSD-3-Clause

#include <stddef.h>

#include "pointers.h"

int my_strcmp(const char *s1, const char *s2)
{
	/**
	 * We iterate through the two character strings until we find a different character
	 * or determine that they are identical.
	 */
	for (; *s1 == *s2 ; ++s1, ++s2)
		if (*s1 == '\0')
			return 0; // identical

	/* Return the difference between the 2 different characters */
	return *(const unsigned char *) s1 - *(const unsigned char *) s2;
}

void *my_memcpy(void *dest, const void *src, size_t n)
{
	unsigned char *d = (unsigned char *) dest;
	const unsigned char *s = (const unsigned char *) src;

	if (s < d && d < s + n) {
		s += n;
		d += n;

		/* Copy n bytes */
		while (n--)
			*(--d) = *(--s);
	} else {
		while (n--)
			*d++ = *s++;
	}

	return dest;
}

char *my_strcpy(char *dest, const char *src)
{
	char *old_dest = dest;

	/* Copy until the string terminator ('\0' == 0). */
	while ((*dest++ = *src++) != 0)
		;

	return old_dest;
}
