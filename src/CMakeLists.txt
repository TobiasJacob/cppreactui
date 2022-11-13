cmake_minimum_required(VERSION 3.10)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
add_compile_definitions(ICE_CPP11_MAPPING)

project(Demo)


find_package(Ice REQUIRED Ice)

include_directories("${Ice_INCLUDE_DIRS}")
include_directories(ice)

add_executable(Demo main.cpp ice/Printer.cpp)
target_link_libraries(Demo Ice++11)

add_executable(Client Client.cpp ice/Printer.cpp)
target_link_libraries(Client Ice++11)
