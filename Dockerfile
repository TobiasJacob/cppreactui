
FROM ubuntu:22.04

RUN apt update

RUN DEBIAN_FRONTEND=noninteractive apt-get -y install \
    clang-12

RUN DEBIAN_FRONTEND=noninteractive apt-get -y install \
    cmake

ENV CC=/usr/bin/clang-12
ENV CXX=/usr/bin/clang++-12
WORKDIR /workdir


RUN DEBIAN_FRONTEND=noninteractive apt-get -y install \
    curl \
    gpg

RUN mkdir -p /etc/ap/keyrings \
    && curl -fsSL https://zeroc.com/download/GPG-KEY-zeroc-release-B6391CB2CFBA643D | gpg --dearmor -o /etc/ap/keyrings/zeroc.gpg \
    && echo \
        "deb [signed-by=/etc/ap/keyrings/zeroc.gpg] https://zeroc.com/download/ice/3.7/ubuntu22.04 stable main" \
        | tee /etc/apt/sources.list.d/zeroc-ice-3.7.list \
    && apt-get update

RUN DEBIAN_FRONTEND=noninteractive apt-get -y install \
    libzeroc-ice-dev libzeroc-ice3.7

RUN DEBIAN_FRONTEND=noninteractive apt-get -y install \
    libboost-all-dev

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -

RUN DEBIAN_FRONTEND=noninteractive apt-get -y install \
    nodejs
