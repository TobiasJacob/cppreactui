cmake_minimum_required(VERSION 3.10)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
add_compile_definitions(ICE_CPP11_MAPPING)

find_package(Boost)

# get_cmake_property(_variableNames VARIABLES)

# list (SORT _variableNames)
# foreach (_variableName ${_variableNames})
#     message(STATUS "${_variableName}=${${_variableName}}")
# endforeach()

include_directories(websocketpp)
include_directories(Boost_INCLUDE_DIR)

project(WebsocketDemo)

add_executable(Client client.cpp)
add_executable(Server server.cpp)
