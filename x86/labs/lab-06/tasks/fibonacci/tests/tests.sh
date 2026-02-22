#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source ./graded_test.inc.sh

if test -z "$SRC_PATH"; then
    SRC_PATH=../support
fi

BINARY="$SRC_PATH"/fibo_sum
LOG=./err.log

cp "$SRC_PATH"/fibo_sum.asm .
: > $LOG

test_fibo_sum()
{
    N=$1
    SOL=$2

    # Modify the assembly code's N value
    sed -i "s/N dd [0-9]\+/N dd $N/w sedlog" "$SRC_PATH"/fibo_sum.asm
    if ! [ -s sedlog ] ; then
        return 2
    fi

    # Build the program
    make -s -C "$SRC_PATH" 2>> $LOG

    # Execute the program and capture the output
    OUTPUT=$($BINARY)

    # Define the expected output
    EXPECTED_OUTPUT="Sum first $N fibonacci numbers is $SOL"

    # Check if the output matches the expected output
    if [[ "$OUTPUT" == "$EXPECTED_OUTPUT" ]]; then
        OUT=0
    else
        OUT=1
    fi

    # Clean up object files and the executable
    make -s -C "$SRC_PATH" clean 2>> $LOG
    return $OUT
}

test_fibo_sum_9_54()
{
    test_fibo_sum 9 54
}
test_fibo_sum_12_232()
{
    test_fibo_sum 12 232
}
test_fibo_sum_1_0()
{
    test_fibo_sum 1 0
}
test_fibo_sum_40_165580140()
{
    test_fibo_sum 40 165580140
}

printf '%s\n\n' "Test name format is test_fibo_sum_<N>_<sum to N>"

run_test "test_fibo_sum_9_54" 25
run_test "test_fibo_sum_12_232" 25
run_test "test_fibo_sum_1_0" 25
run_test "test_fibo_sum_40_165580140" 25

if [ $? -eq 2 ] ; then
    printf "\nERROR: Make sure the declaration of variable N in section .data follows the format \"N dd <value>\"\n"
fi

mv ./fibo_sum.asm "$SRC_PATH"
rm sedlog
if ! [ -s $LOG ] ; then
    rm $LOG
fi
