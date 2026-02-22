#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source graded_test.inc.sh

binary=../support/stack-addressing
out=stack-addressing.out

if test -z "$SRC_PATH"; then
    SRC_PATH=./../support
fi

test_stack_addressing()
{
    touch "$out"

    ./"$binary" > "$out" 2>&1

    if grep -q "push .*" "${binary}.asm"; then
        exit 1
    fi
    awk '
        BEGIN { expected_addr = "" }

        /^Bob has corn$/ {
            if (NR != 1 && NR != 12) exit 1
            next
        }

        NR == 2 {
            if (!match($0, /^0x[0-9a-fA-F]+: 0x[0-9a-fA-F]+$/)) exit 1
            split($0, parts, ": ")
            expected_addr = strtonum(parts[1]) - 4
            next
        }

        NR >= 3 && NR <= 11 {
            if (!match($0, /^0x[0-9a-fA-F]+: 0x[0-9a-fA-F]+$/)) exit 1
            split($0, parts, ": ")
            current_addr = strtonum(parts[1])

            if (current_addr != expected_addr) exit 1

            expected_addr -= 4
            next
        }

        NR == 13 {
            if (!match($0, /^1 2 3 4 5$/)) exit 1
            next
        }

        END { exit (NR == 13 ? 0 : 1) }
    ' "$out"
}

run_test test_stack_addressing 100
