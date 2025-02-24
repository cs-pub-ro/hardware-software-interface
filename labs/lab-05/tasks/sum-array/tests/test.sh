#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source graded_test.inc.sh

binary="../support/sum_array"

OUTPUT=$($binary)

word_sum=$(echo "$OUTPUT" | grep "A" | sed -n '2p' | awk '{print $4}')
dword_sum=$(echo "$OUTPUT" | grep "A" | sed -n '3p' | awk '{print $4}')
squares_sum=$(echo "$OUTPUT" | grep "A" | sed -n '4p' | awk '{print $4}')
big_sum=$(echo "$OUTPUT" | grep "A" | sed -n '5p' | awk '{print $4}')

first_test() {
	if [[ -z $word_sum ]]; then
		exit 1
	fi

	if [[ $word_sum -eq 65799 ]]; then
		exit 0
	else
		exit 1
	fi
}

second_test() {
	if [[ -z $dword_sum ]]; then
		exit 1
	fi

	if [[ $dword_sum -eq 74758117 ]]; then
		exit 0
	else
		exit 1
	fi
}

third_test() {
	if [[ -z $squares_sum ]]; then
		exit 1
	fi

	if [[ $squares_sum -eq 2704560839 ]]; then
		exit 0
	else
		exit 1
	fi
}

fourth_test() {
	if [[ -z $big_sum ]]; then
		exit 1
	fi

	if [[ $big_sum -eq 1610691026282151079 ]]; then
		exit 0
	else
		exit 1
	fi
}

run_tests() {
	local tests=(first_test second_test third_test fourth_test)
	local scores=(20 20 30 30)
	for i in {0..3}; do
		run_test "${tests[i]}" "${scores[i]}"
	done
}

run_tests
