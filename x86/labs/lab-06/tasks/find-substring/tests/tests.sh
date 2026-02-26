#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source ./graded_test.inc.sh

if test -z "$SRC_PATH"; then
    SRC_PATH=../support
fi

BINARY="$SRC_PATH"/find_substring
LOG=./err.log

cp "$SRC_PATH"/find_substring.asm .
: > "$LOG"

test_find_substring()
{
    SOURCE_TEXT=$1
    SUBSTRING=$2

    # Modify the assembly code's source_text value
    sed -i "s/source_text: db \".*\"\+/source_text: db \"$SOURCE_TEXT\"/w sedlog" "$SRC_PATH"/find_substring.asm
    if ! [ -s sedlog ] ; then
        return 2
    fi

    # Modify the assembly code's substring value
    sed -i "s/substring: db \".*\"\+/substring: db \"$SUBSTRING\"/w sedlog" "$SRC_PATH"/find_substring.asm
    if ! [ -s sedlog ] ; then
        return 2
    fi

    # Build the program
    make -s -C "$SRC_PATH" 2>> "$LOG"

    # Execute the program and capture the output
    OUTPUT=$($BINARY)

    # Calculate the expected output
    if [ $# -gt 3 ] ; then
        EXPECTED_OUTPUT+=$(printf '%s\n' "Substring found at index: $3")
    fi
    for var in "${@:4}" ; do
        EXPECTED_OUTPUT+=$(printf '\n%s\n' "Substring found at index: $var")
    done

    # Check if the output matches the expected output
    if [[ "$OUTPUT" == "$EXPECTED_OUTPUT" ]] || [[ "$OUTPUT" == "${EXPECTED_OUTPUT:0:-1}" ]]; then
        OUT=0
    else
        OUT=1
    fi

    # Clean up object files and the executable
    make -s -C "$SRC_PATH" clean 2>> "$LOG"
    return $OUT
}

test_find_substring_sample()
{
    test_find_substring "ABCABCBABCBABCBBBABABBCBABCBAAACCCB" "BABC" 6 10 23
}
test_find_substring_no_occurrence()
{
    test_find_substring "This is a test" "for no occurrences"
}
test_find_substring_small()
{
    test_find_substring "baaanaaanaaaa" "aa" 1 2 5 6 9 10 11
}
test_find_substring_large()
{
    test_find_substring "Far far away, behind the word mountains, far from the countries \
Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove \
right at the coast of the Semantics, a large language ocean. A small river named Duden flows \
by their place and supplies it with the necessary regelialia. It is a paradisematic country, \
in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has \
no control about the blind texts it is an almost unorthographic life One day however a small \
line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. \
The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild \
Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her \
seven versalia, put her initial into the belt and made herself on the way." \
"in" 17 36 106 137 341 381 422 425 456 527 536 762 827 835
}

run_test "test_find_substring_sample" 25
run_test "test_find_substring_no_occurrence" 25
run_test "test_find_substring_small" 25
run_test "test_find_substring_large" 25

if [ $? -eq 2 ] ; then
    printf "\nERROR: Make sure the declaration of variables in section \
.data follows the format \"<variable>: db \"<string>\", 0\"\n"
fi

mv ./find_substring.asm "$SRC_PATH"
rm sedlog
if ! [ -s "$LOG" ] ; then
    rm "$LOG"
fi
