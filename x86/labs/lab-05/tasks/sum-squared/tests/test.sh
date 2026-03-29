#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source graded_test.inc.sh

binary1="../support/sum_n"
binary2="../support/sum_n_squared"

OUTPUT1=$($binary1)

if [[ -x $binary2 ]]; then
    OUTPUT2=$($binary2)
else
    OUTPUT2="Not yet"
fi

sum_100=$(echo "$OUTPUT1" | grep "S" | sed -n '1p' | awk '{print $2}')
sum_squares_100=$(echo "$OUTPUT2" | grep "S" | sed -n '1p' | awk '{print $2}')

test_sum_100() {
	if [[ -z $sum_100 ]]; then
		exit 1
	fi

	if [[ $sum_100 -eq 5050 ]]; then
		exit 0
	else
		exit 1
	fi
}

test_sum_squares_100() {
	if [[ -z $sum_squares_100 ]]; then
		exit 1
	fi

	if [[ $sum_squares_100 -eq 338350 ]]; then
		exit 0
	else
		exit 1
	fi
}

run_tests() {
	local tests=(test_sum_100 test_sum_squares_100)
	local scores=(50 50)
	for i in {0..1}; do
		run_test "${tests[i]}" "${scores[i]}"
	done
}

run_tests
