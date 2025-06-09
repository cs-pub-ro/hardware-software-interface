/* SPDX-License-Identifier: BSD-3-Clause */

#include <stddef.h>

#ifndef __POINTERS_H__
#define __POINTERS_H__ 1

#define SIGN(X) (((X) > 0) - ((X) < 0))

int my_strcmp(const char *s1, const char *s2);
void *my_memcpy(void *dest, const void *src, size_t n);
char *my_strcpy(char *dest, const char *src);

#endif // __POINTERS_H__
