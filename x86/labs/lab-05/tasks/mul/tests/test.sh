#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source graded_test.inc.sh

binary="../support/multiply"

OUTPUT=$($binary)

result1=$(echo "$OUTPUT" | grep "R" | sed -n '1p' | awk '{print $3}')
result2=$(echo "$OUTPUT" | grep "R" | sed -n '2p' | awk '{print $3}')
result3=$(echo "$OUTPUT" | grep "R" | sed -n '3p' | awk '{print $3}')

test_byte_mul() {
	if [[ -z "$result1" ]]; then
		exit 1
	fi

	if [[ $result1 -eq $((0x68d)) ]]; then
		exit 0
	else
		exit 1
	fi
}

test_short_mul() {
	if [[ -z "$result2" ]]; then
		exit 1
	fi

	if [[ $result2 -eq $((0xccca91)) ]]; then
		exit 0
	else
		exit 1
	fi
}

test_int_mul() {
	if [[ -z "$result3" ]]; then
		exit 1
	fi

	if [[ $result3 -eq $((0x1f41a73f80)) ]]; then
		exit 0
	else
		exit 1
	fi
}

run_tests() {
	local tests=(test_byte_mul test_short_mul test_int_mul)
	local scores=(33 33 34)
	for i in {0..2}; do
		run_test "${tests[i]}" "${scores[i]}"
	done
}

run_tests
