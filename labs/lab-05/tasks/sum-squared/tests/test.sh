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

sum=$(echo "$OUTPUT1" | grep "Sum" | awk '{print $2}' | tr -d '():')
sum_squares=$(echo "$OUTPUT2" | grep "Sum" | awk '{print $4}' | tr -d '():')

test_sum() {
	if [[ -z $sum ]]; then
		exit 1
	fi

	if [[ $sum -eq 5000050000 ]]; then
		exit 0
	else
		exit 1
	fi
}

test_sum_squares() {
	if [[ -z $sum_squares ]]; then
		exit 1
	fi

	if [[ $sum_squares -eq 333338333350000 ]]; then
		exit 0
	else
		exit 1
	fi
}

run_tests() {
	local tests=(test_sum test_sum_squares)
	local scores=(50 50)
	for i in {0..1}; do
		run_test "${tests[i]}" "${scores[i]}"
	done
}

run_tests
