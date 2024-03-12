FROM ubuntu:22.04

RUN apt-get update \
    && apt-get install -y \
        gcc \
        gcc-multilib \
        nasm \
        make \
        build-essential \
        binutils \
        gdb \
        vim \
        nano \
        tmate \
        python2.7 \
        python3.10 \
        python-is-python3 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
CMD [ "bash" ]
