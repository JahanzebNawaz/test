import React, { useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Message from './Message';


function App() {
    const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
            <Message count={count} />
            <Button count={count}  onUpdate={ ( num ) => setCount(num)} />
        </div>
        
      </header>
    </div>
  );
}

export default App;
