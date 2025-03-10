// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#include "delete_first.h"

char *delete_first(char *s, char *pattern)
{
	char *new = (char*)malloc(strlen(s)-strlen(pattern));
	for (int i = 0; i < strlen(s); i++) {
		int k = 1;
		for (int j = 0; j<strlen(pattern); j++) {
			if (!(s[i+j] == pattern[j]))
				k=0;
		}
		if (k) {
			for (int j = 0; j<strlen(s)-strlen(pattern); j++) {
				if (j==i) {
					for (int d = j+strlen(pattern); d<strlen(s); d++, j++) {
						new[j] = s[d];
					}
					break;
				} else {
					new[j] = s[j];
				}
			}
			new[strlen(s)-strlen(pattern)] = '\0';
			break;
		} else {
			for (int j = 0; j<strlen(s); j++) {
					new[j] = s[j];
			}
		}
	}

	return new;
}
