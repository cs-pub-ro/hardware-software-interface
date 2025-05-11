#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source graded_test.inc.sh

binary="../support/sum_array"

OUTPUT=$($binary)

word_sum=$(echo "$OUTPUT" | grep "Word array sum:" | awk '{print $4}')
dword_sum=$(echo "$OUTPUT" | grep "Dword array sum:" | awk '{print $4}')
qword_sum=$(echo "$OUTPUT" | grep "Qword array sum:" | awk '{print $4}')
big_sum=$(echo "$OUTPUT" | grep "128-bit addition example:" | awk '{print $4}')

word_sum_test() {
	if [[ -z $word_sum ]]; then
		exit 1
	fi

	if [[ $word_sum -eq 65799 ]]; then
		exit 0
	else
		exit 1
	fi
}

dword_sum_test() {
	if [[ -z $dword_sum ]]; then
		exit 1
	fi

	if [[ $dword_sum -eq 140975 ]]; then
		exit 0
	else
		exit 1
	fi
}

qword_sum_test() {
	if [[ -z $qword_sum ]]; then
		exit 1
	fi

	if [[ $qword_sum -eq 51933475293 ]]; then
		exit 0
	else
		exit 1
	fi
}

big_sum_test() {
	if [[ -z $big_sum ]]; then
		exit 1
	fi

	if [[ $big_sum -eq 0x1565ddbe509d3ffe8 ]]; then
		exit 0
	else
		exit 1
	fi
}

run_tests() {
	local tests=(word_sum_test dword_sum_test qword_sum_test big_sum_test)
	local scores=(20 20 30 30)
	for i in {0..3}; do
		run_test "${tests[i]}" "${scores[i]}"
	done
}

run_tests
