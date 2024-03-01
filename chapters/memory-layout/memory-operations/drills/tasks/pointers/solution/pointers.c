// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <assert.h>
#include <stdlib.h>

#define SIGN(X) (((X) > 0) - ((X) < 0))

int my_strcmp(const char *s1, const char *s2)
{
	/**
	 * We iterate through the two character strings until we find a different character
	 * or determine that they are identical.
	 */
	for (; *s1 == *s2 ; ++s1, ++s2)
		if (*s1 == '\0')
			return 0; // identice

	/* Return the difference between the 2 different characters */
	return *(const unsigned char *) s1 - *(const unsigned char *) s2;
}

void *my_memcpy(void *dest, const void *src, size_t n)
{
	size_t i;
	unsigned char *d = (unsigned char *) dest;
	const unsigned char *s = (const unsigned char *) src;

	/* Copy n bytes */
	for (i = 0 ; i < n ; ++i)
		*d++ = *s++;

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

int main(void)
{
	char s1[] = "Abracadabra";
	char s2[] = "Abracababra";
	char src[] = "Learn IOCLA, you must!";
	char *dest = malloc(sizeof(src));

	/* testing */
	assert(SIGN(my_strcmp(s1, s2)) == SIGN(strcmp(s1, s2)));
	assert(my_memcpy(dest, src, sizeof(src)) == memcpy(dest, src, sizeof(src)));
	assert(my_strcpy(dest, src) == strcpy(dest, src));

	free(dest);

	return 0;
}
