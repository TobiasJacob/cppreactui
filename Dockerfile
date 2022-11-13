# docker build -t cppreactuidev .
# docker run --rm -it -v ${PWD}:/workdir cppreactuidev /bin/bash

FROM ubuntu:22.04

RUN apt update

RUN DEBIAN_FRONTEND=noninteractive apt-get -y install \
    clang-12

RUN DEBIAN_FRONTEND=noninteractive apt-get -y install \
    nodejs

RUN DEBIAN_FRONTEND=noninteractive apt-get -y install \
    cmake

ENV CC=/usr/bin/clang-12
ENV CXX=/usr/bin/clang++-12
WORKDIR /workdir
