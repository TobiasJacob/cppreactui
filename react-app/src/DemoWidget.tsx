import React, { useContext } from 'react';
import './App.css';
import { CommunicatorContext, usePrinterCallback } from './Communicator';
import { Demo } from './ice/Printer';


function DemoWidget() {
  const sendStuff = usePrinterCallback(async (printer) => {
    await printer.printString("Hello world");
  })

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={sendStuff}>Send command</button>
      </header>
    </div>
  );
}

export default DemoWidget;
