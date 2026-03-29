#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source graded_test.inc.sh

binary=../support/max
ref_binary=../solution/max
out=max.out
ref=max.ref

if test -z "$SRC_PATH"; then
    SRC_PATH=./../support
fi

test_max()
{
    touch "$out" "$ref"

    ./"$binary" > "$out" 2>&1
    ./"$ref_binary" > "$ref" 2>&1

    if grep -q -E 'cmp eax, ebx|cmp ebx, eax' "${binary}.asm" &&
       grep -q -E 'jl|jg|jb|ja|jle|jge|jbe|jae' "${binary}.asm" &&
       grep -q -E 'push' "${binary}.asm" &&
       grep -q -E 'pop' "${binary}.asm"; then
        if diff -q "$out" "$ref"; then
            exit 0
        else
            exit 1
        fi
    else
        exit 1
    fi
}

run_test test_max 100
