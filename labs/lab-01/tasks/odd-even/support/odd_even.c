// SPDX-License-Identifier: BSD-3-Clause

#include <stdio.h>
#include <stdlib.h>

#include "odd_even.h"

void print_binary(int number, int nr_bits)
{
	printf("0b");
	char *binary = malloc(nr_bits);
	int i;

	for(i = nr_bits - 1; i >= 0; i--)
	{
		*(binary + i) = 1 & number;
		number = number >> 1;
	}

	for(i = 0; i < nr_bits; i++)
		printf("%d", *(binary + i));

}

void check_parity(int *numbers, int n)
{
	int i, nr;
	for(i = 0; i < n; i++)
	{
		nr = *(numbers + i);
		if(nr & 1)
		{
			printf("0x%08X\n", nr);
		}
		else
		{
			print_binary(nr, 8);
			printf("\n");
		}
	}
}
