#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause
# shellcheck disable=SC1091

source ./graded_test.inc.sh

test_exploit() {
	if ( cd ../support && python3 exploit.py | grep -q "Great success!" ); then
		return 1
	else
		return 0
	fi
}

run_test test_exploit
