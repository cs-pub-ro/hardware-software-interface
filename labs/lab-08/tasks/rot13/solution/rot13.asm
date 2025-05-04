section .text
global rot13

rot13:
    push rbp
    mov rbp, rsp

    mov rcx, rsi            ; length of the buffer
    mov rsi, rdi            ; pointer to the input string

loop:
    cmp rcx, 0              ; Check if there are more characters to process
    je done                 ; If no, we are done

    mov al, [rsi]           ; Load the current byte into AL register
    cmp al, 0               ; Check if it's the null terminator
    je handle_null          ; If it's a null terminator, handle it

    cmp al, 'a'             ; Check if character is in lowercase (a-z)
    jl check_upper
    cmp al, 'z'
    jg check_upper

    sub al, 'a'             ; Normalize to 0-25 range
    add al, 13              ; Apply ROT13 (shift by 13)
    cmp al, 26
    jl lower_store
    sub al, 26              ; Wrap around if beyond 'z'

lower_store:
    add al, 'a'             ; Convert back to ASCII
    mov [rsi], al           ; Store the transformed character back
    jmp next

check_upper:
    cmp al, 'A'             ; Check if character is in uppercase (A-Z)
    jl next
    cmp al, 'Z'
    jg next

    sub al, 'A'             ; Normalize to 0-25 range for uppercase
    add al, 13              ; Apply ROT13 (shift by 13)
    cmp al, 26
    jl upper_store
    sub al, 26              ; Wrap around if beyond 'Z'

upper_store:
    add al, 'A'             ; Convert back to ASCII
    mov [rsi], al           ; Store the transformed character back

next:
    inc rsi                 ; Move to the next byte in the string
    dec rcx                 ; Decrement the length counter
    jmp loop                ; Repeat the loop

handle_null:
    ; We are at a null terminator, check if it's the last null terminator
    ; If so, just leave it and terminate the string
    cmp byte [rsi + 1], 0   ; Check if the next byte is also a null terminator
    je done                 ; If yes, don't replace with a space

    ; Otherwise, replace null terminator with space
    mov byte [rsi], ' '
    inc rsi                 ; Move to the next byte
    jmp loop

done:

    leave                   ; Clean up the stack frame
    ret                     ; Return from the function
