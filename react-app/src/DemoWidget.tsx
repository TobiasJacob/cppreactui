import React, { useContext, useState } from 'react';
import './App.css';
import { CommunicatorContext, usePrinterCallback } from './Communicator';
import { Demo } from './ice/Printer';


function DemoWidget() {
  const [msg, setMsg] = useState("");

  const sendStuff = usePrinterCallback(async (printer) => {
    await printer.printString("Client to cpp: " + msg);
  })

  return (
    <div className="App">
      <header className="App-header">
        <textarea value={msg} onChange={(ev) => {setMsg(ev.target.value)}} />
        <button onClick={sendStuff}>Send command</button>
      </header>
    </div>
  );
}

export default DemoWidget;
