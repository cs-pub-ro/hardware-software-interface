// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "mirror.h"

void mirror(char *s)
{
		char c, aux;
		int len = strlen(s), i;
		for(i=0; i < len / 2; i++)
		{
				c = *(s + (len - i -1));
				aux = *(s + i);
				*(s + i) = c;
				*(s + (len - i -1)) = aux;
		}
}
