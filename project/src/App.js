import React, { useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Message from './Message';
import Context from './Context';



function App() {

    const updateState = (num) => {
        setState(
            ({count, updateState}) => {
                return {
                    count: num,
                    updateState: updateState
                }
            }
        )
    }

    const [state, setState] = useState({
        count: 0,
        updateState: updateState
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Context.Provider value={state} className="container">
            <Message />
        </Context.Provider>

            {/* <Message count={state} onUpdate={ (count) => setCount(count)} /> */}
            {/* <Button count={count}  onUpdate={ ( num ) => setCount(num)} /> */}
        
      </header>
    </div>
  );
}

export default App;
