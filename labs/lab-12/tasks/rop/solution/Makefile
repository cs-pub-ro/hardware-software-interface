CC = gcc
CFLAGS = -g -z execstack -fno-PIC -fno-stack-protector -O0
LDFLAGS = -no-pie
SRC_DIR = .
TARGET = rop
OBJ = rop.o

all: $(TARGET)

obfuscator: $(SRC_DIR)/obfuscator.c
	$(CC) -o $@ $< -m32 -fno-stack-protector -z execstack -no-pie -Wall

deobfuscator: $(SRC_DIR)/deobfuscator.c
	$(CC) -o $@ $< -m32 -fno-stack-protector -z execstack -no-pie -Wall

$(TARGET): $(OBJ)
	$(CC) $(LDFLAGS) $(OBJ) -o $(TARGET)

$(OBJ): $(SRC_DIR)/rop.c
	$(CC) $(CFLAGS) -c $(SRC_DIR)/rop.c

clean:
	rm -rf $(OBJ) $(TARGET) obfuscator deobfuscator
