#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source graded_test.inc.sh

binary=../support/local-var
ref_binary=../solution/local-var
out=local-var.out
ref=local-var.ref

if test -z "$SRC_PATH"; then
    SRC_PATH=./../support
fi

test_local_var()
{
    touch "$out" "$ref"

    ./"$binary" > "$out" 2>&1
    ./"$ref_binary" > "$ref" 2>&1

    if grep -q "sub rsp, .*" "${binary}.asm" &&
       grep -q "mov .*, [rsp]" "${binary}.asm"; then
        if diff -q "$out" "$ref"; then
            exit 0
        else
            exit 1
        fi
    else
        exit 1
    fi
}

run_test test_local_var 100
