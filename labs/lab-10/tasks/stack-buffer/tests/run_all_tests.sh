#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

cd ../support || exit
make
cd ../tests || exit
./test_stack_buffer | tee results.txt

passed_part2=$(grep -c 'test_part2.*passed' results.txt)
passed_part3=$(grep -c 'test_part3.*passed' results.txt)

total=$((passed_part2 * 50 + passed_part3 * 50))

echo ""
echo -n "Total:      "
echo -n "                                "
LC_ALL=C printf "%3d/100\n" "$total"

rm results.txt
cd ../support || exit
make clean
