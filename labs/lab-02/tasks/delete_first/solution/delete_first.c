// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#include "delete_first.h"

char *delete_first(char *s, char *pattern)
{
	/**
	 * TODO: Implement this function
	 */
	char *found = strstr(s, pattern);

	/**
	 * Handle the case where the pattern does not appear in the
	 * string of characters.
	 */
	if (!found)
		return strdup(s);

	/* number of characters before the first occurrence of the pattern */
	int nbefore = found - s;
	/* number of characters to be removed */
	int nremoved = strlen(pattern);
	/* Allocate exactly what we need. */
	char *result = malloc(strlen(s) + 1 - nremoved);

	/* Check if the allocation worked */
	if (result == NULL) {
		perror("malloc");
		exit(1);
	}

	/* Construct the result */
	strncpy(result, s, nbefore);
	strcpy(result + nbefore, found + nremoved);

	return result;
}
