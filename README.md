# cppreactui
Simple demo on how to combine react with c++

## Develop in Dev Container

```console
docker build -t cppreactuidev .
docker run --rm -it -v ${PWD}:/workdir -p 10000:10000 -p 3000:3000 --net=host cppreactuidev /bin/bash
```

## Build instructions

Setup

```console
mkdir src/ice
slice2cpp Printer.ice --output-dir src/ice

mkdir standalonewebsite/ice
slice2js Printer.ice --output-dir standalonewebsite/ice


mkdir src/build
cd src/build
cmake ..
make
cd ../..


mkdir react-app/src/ice
slice2js Printer.ice --output-dir react-app/src/ice --typescript

cd react-app
npm install
```

Run the server

```console
./src/build/Demo
```

In a second terminal run the webapp

```console
npm start
```

To get a static html website

```console
npm build
```
