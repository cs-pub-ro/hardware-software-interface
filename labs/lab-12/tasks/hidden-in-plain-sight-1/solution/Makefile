CC = gcc
CFLAGS = -g -m32 -z execstack -fno-PIC -fno-stack-protector
LDFLAGS = -no-pie -m32
SRC_DIR = .
TARGET = main

all: $(TARGET)

obfuscator: $(SRC_DIR)/obfuscator.c
	$(CC) -o $@ $< -m32 -fno-stack-protector -z execstack -no-pie -Wall

deobfuscator: $(SRC_DIR)/deobfuscator.c
	$(CC) -o $@ $< -m32 -fno-stack-protector -z execstack -no-pie -Wall

link: $(SRC_DIR)/link.c
	$(CC) $(CFLAGS) -c -o $@ $<

$(TARGET): link main.o
	$(CC) $(LDFLAGS) link main.o -o $(TARGET)

main.o: $(SRC_DIR)/main.c
	$(CC) $(CFLAGS) -c -o main.o $(SRC_DIR)/main.c

clean:
	rm -rf link main.o $(TARGET) obfuscator deobfuscator
