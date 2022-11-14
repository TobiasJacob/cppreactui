import React, { useState } from 'react';
import './App.css';
import { usePrinterCallback } from './Communicator';


function DemoWidget() {
  const [msg, setMsg] = useState("");
  const [response, setResponse] = useState("");

  const sendStuff = usePrinterCallback(async (printer) => {
    await printer.printString("Client to cpp: " + msg);
  })

  const sendMeAText = usePrinterCallback(async (printer) => {
    const text = await printer.sendMeAText();
    setResponse(text);
  })


  return (
    <div className="App">
      <header className="App-header">
        <textarea value={msg} onChange={(ev) => {setMsg(ev.target.value)}} />
        <button onClick={sendStuff}>Send to cpp</button>
        <button onClick={sendMeAText}>Send me a text</button>
        <p>{response}</p>
      </header>
    </div>
  );
}

export default DemoWidget;
