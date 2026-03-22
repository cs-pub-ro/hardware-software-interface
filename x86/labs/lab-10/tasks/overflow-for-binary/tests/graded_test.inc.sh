#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

print_test()
{
	desc="$1"
	res="$2"

	dots="........................................"

	printf "%-12.12s%s"   "$desc" "$dots"

	if [ "$res" -eq 1 ]; then
		printf "passed"
	else
		printf "failed"
	fi

	printf "\n"
}

run_test()
{
	func="$1"

	( eval "$func" )
	ret=$?

	print_test "$func" "$ret"
}
