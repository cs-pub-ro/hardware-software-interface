/* SPDX-License-Identifier: BSD-3-Clause */

#ifndef FIND_MAX_H
#define FIND_MAX_H 1

#include <stddef.h>

/**
 * Generic function for calculating the maximum value from an array.
 * n is the size of the array
 * element_size is the size of an element in the array
 * The arr vector will be traversed, during each iteration, we'll check
 * if the compare function returns 1, in which case the current element will be
 * the maximum one.
 * To use pointer arithmetic correctly, we multiply the current iteration index
 * by the size of an element.
 * Thus, for accessing the current element we have:
 * void *cur_element = (char *)arr + index * element_size;
 */
void *find_max(void *arr, int n, size_t element_size,
	int (*compare)(const void *, const void *));

/**
 * a and b are two pointers to void, but it is specified in the statement
 * that the data at those addresses are of type int, so they need to be cast.
 * The function returns 1 if the value at the address of a is greater than
 * the value at the address of b, otherwise it returns 0.
 */
int compare(const void *a, const void *b);

#endif // FIND_MAX_H
