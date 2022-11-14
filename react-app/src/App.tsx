import React from 'react';
import LocalCommunicator from './Communicator';
import DemoWidget from './DemoWidget';

function App() {

  return (
    <div className="App">
      <LocalCommunicator>
        <DemoWidget />
      </LocalCommunicator>
    </div>
  );
}

export default App;
