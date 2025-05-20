/* SPDX-License-Identifier: BSD-3-Clause */

#ifndef MIRROR_H
#define MIRROR_H	1

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define STR_SIZE 512

char *new_string(const char *cont_str);

int my_strlen(const char *str);

void mirror(char *s);

#endif /* MIRROR_H */
