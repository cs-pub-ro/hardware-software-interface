#include <stdio.h>
#include "ops.h"
void check_result(void)
{
    printf("hidden value: %d\n", get());
    print_age();
}