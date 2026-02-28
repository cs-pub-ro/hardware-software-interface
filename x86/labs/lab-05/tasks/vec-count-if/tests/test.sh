#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source graded_test.inc.sh

binary1="../support/count_pos_neg"
binary2="../support/count_even_odd"

OUTPUT1=$($binary1)

if [[ -x $binary2 ]]; then
    OUTPUT2=$($binary2)
else
    OUTPUT2="Not yet"
fi

pos=$(echo "$OUTPUT1" | sed -E 's/[^0-9]+/ /g'| awk '{print $1}')
neg=$(echo "$OUTPUT1" | sed -E 's/[^0-9]+/ /g' | awk '{print $2}')
even=$(echo "$OUTPUT2" | sed -E 's/[^0-9]+/ /g' | awk '{print $1}')
odd=$(echo "$OUTPUT2" | sed -E 's/[^0-9]+/ /g' | awk '{print $2}')

test_pos() {
	if [[ -z $pos ]]; then
		exit 1
	fi

	if [[ $pos -eq 6 ]]; then
		exit 0
	else
		exit 1
	fi
}

test_neg() {
	if [[ -z $neg ]]; then
		exit 1
	fi

	if [[ $neg -eq 4 ]]; then
		exit 0
	else
		exit 1
	fi
}

test_even() {
	if [[ -z $even ]]; then
		exit 1
	fi

	if [[ $even -eq 6 ]]; then
		exit 0
	else
		exit 1
	fi
}

test_odd() {
	if [[ -z $odd ]]; then
		exit 1
	fi

	if [[ $odd -eq 4 ]]; then
		exit 0
	else
		exit 1
	fi
}

run_tests() {
	local tests=(test_pos test_neg test_even test_odd)
	local scores=(25 25 25 25)
	for i in {0..3}; do
		run_test "${tests[i]}" "${scores[i]}"
	done
}

run_tests
