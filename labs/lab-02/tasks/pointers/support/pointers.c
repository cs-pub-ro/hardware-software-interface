// SPDX-License-Identifier: BSD-3-Clause

#include <stddef.h>

#include "pointers.h"

int my_strcmp(const char *s1, const char *s2)
{
	int n1=0,n2=0;
	while (s1[n1] == s2[n2] && n1<strlen(s1) && n2<strlen(s2)) {
		n1++;
		n2++;
	}
	if (n1 == strlen(s1) && n2==strlen(s2)) {
		return 0;
	} else if (n1 == strlen(s1) && n2!=strlen(s2)) {
		return 1;
	} else if (n2 == strlen(s2) && n1!=strlen(s1)) {
		return -1;
	} else {
		return s1[n1] - s2[n2];
	}
}

void *my_memcpy(void *dest, const void *src, size_t n)
{
	char *d = (char *)dest;
    const char *s = (const char *)src;

	if (s < d && d < s + n) {
    for (int i = n-1; i >= 0; i--) {
        d[i] = s[i];
    }
	} else {
		for (int i = 0; i < n; i++) {
			d[i] = s[i];
		}
	}

    return dest;
}

char *my_strcpy(char *dest, const char *src)
{
	while(*src) {
		*dest = *src;
		src++;
		dest++;
	}
	*dest = '\0';

	return dest;
}
