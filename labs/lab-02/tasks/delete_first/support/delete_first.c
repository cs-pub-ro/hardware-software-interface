// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char *delete_first(char *s, char *pattern);

int main(void)
{
	/**
	 * TODO: Is the declaration of the s variable correct considering that
	 * we're calling the delete_first function on it? Why? Modify if necessary.
	 */
	char *s = "Ana are mere";
	char *pattern = "re";

	(void) s;
	(void) pattern;

	/* Uncomment this line after implementing the delete_first function */
	/* printf("%s\n", delete_first(s, pattern)); */

	return 0;
}
