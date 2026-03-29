#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

./test_read_stdin_gets | tee results.txt

total=$(if tail -n 1 results.txt | grep -q 'passed$'; then echo 100; else echo 0; fi)
echo ""
echo -n "Total:      "
echo -n "                                "
LC_ALL=C printf "%3d/100\n" "$total"

rm results.txt
