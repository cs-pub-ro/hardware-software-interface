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

quotient4=$(echo "$OUTPUT" | grep "Quotient:" | sed -n '4p' | awk '{print $2}')
remainder4=$(echo "$OUTPUT" | grep "Remainder:" | sed -n '4p' | awk '{print $2}')


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
	if [[ $quotient3 -eq 5 && $remainder3 -eq 7365758 ]]; then
		exit 0
	else
		exit 1
	fi
}

test_fourth_div() {
	if [[ $quotient4 -eq 0xffff && $remainder4 -eq 0xffff ]]; then
		exit 0
	else
		exit 1
	fi
}

run_tests() {
	local tests=(test_first_div test_second_div test_third_div test_fourth_div)
	local scores=(25 25 25 25)
	for i in {0..3}; do
		run_test "${tests[i]}" "${scores[i]}"
	done
}

run_tests
