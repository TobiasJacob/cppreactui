import React, { useContext } from 'react';
import './App.css';
import { CommunicatorContext } from './Communicator';
import { Demo } from './ice/Printer';


function DemoWidget() {
  const sendStuff = async () => {
    const communicator = window.Ice.initialize();

    const hostname = document.location.hostname || "127.0.0.1";
    console.log(hostname)
    const proxy = communicator.stringToProxy(`SimplePrinter:ws -h ${hostname} -p 10000`);
    const printer = await window.Demo.PrinterPrx.checkedCast(proxy);
    if(printer)
    {
        await printer.printString("Hello World!");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={sendStuff}>Send command</button>
      </header>
    </div>
  );
}

export default DemoWidget;
