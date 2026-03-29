#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

echo ""
(
  bash test.sh
) | tee results.txt
echo ""

if tail -n 1 results.txt | grep -q 'passed$'; then
		total=100
else
		total=0
fi

echo -n "Total:      "
echo -n "                                "
LC_ALL=C printf "%3d/100\n" "$total"

rm results.txt
