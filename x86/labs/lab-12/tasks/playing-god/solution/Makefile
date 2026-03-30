CC = gcc
CFLAGS = -g -m32 -z execstack -fno-PIC -fno-stack-protector
LDFLAGS = -no-pie -m32
SRC_DIR = .
TARGET = dynamic2
OBJ = vuln.o

all: $(TARGET)

obfuscator: $(SRC_DIR)/obfuscator.c
	$(CC) -o $@ $< -m32 -fno-stack-protector -z execstack -no-pie -Wall

deobfuscator: $(SRC_DIR)/deobfuscator.c
	$(CC) -o $@ $< -m32 -fno-stack-protector -z execstack -no-pie -Wall

$(TARGET): $(OBJ)
	$(CC) $(LDFLAGS) $(OBJ) -o $(TARGET)

$(OBJ): $(SRC_DIR)/vuln.c
	$(CC) $(CFLAGS) -c $(SRC_DIR)/vuln.c

clean:
	rm -rf $(OBJ) $(TARGET) obfuscator deobfuscator
