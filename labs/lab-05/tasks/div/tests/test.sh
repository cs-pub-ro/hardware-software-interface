#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source graded_test.inc.sh

binary="../support/divide"

OUTPUT=$($binary)

quotient1=$(echo "$OUTPUT" | grep "Quotient:" | sed -n '1p' | awk '{print $2}')
remainder1=$(echo "$OUTPUT" | grep "Remainder:" | sed -n '1p' | awk '{print $2}')

quotient2=$(echo "$OUTPUT" | grep "Quotient:" | sed -n '2p' | awk '{print $2}')
remainder2=$(echo "$OUTPUT" | grep "Remainder:" | sed -n '2p' | awk '{print $2}')

quotient3=$(echo "$OUTPUT" | grep "Quotient:" | sed -n '3p' | awk '{print $2}')
remainder3=$(echo "$OUTPUT" | grep "Remainder:" | sed -n '3p' | awk '{print $2}')

test_first_div() {
	if [[ $quotient1 -eq 3 && $remainder1 -eq 10 ]]; then
		exit 0
	else
		exit 1
	fi
}

test_second_div() {
	if [[ $quotient2 -eq 49 && $remainder2 -eq 1153 ]]; then
		exit 0
	else
		exit 1
	fi
}

test_third_div() {
	if [[ $quotient3 -eq 788 && $remainder3 -eq 48800 ]]; then
		exit 0
	else
		exit 1
	fi
}

run_tests() {
	local tests=(test_first_div test_second_div test_third_div)
	local scores=(33 33 34)
	for i in {0..2}; do
		run_test "${tests[i]}" "${scores[i]}"
	done
}

run_tests
