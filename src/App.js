import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let [responseData, setResponseData] = React.useState('');   // new

    React.useEffect(() => {
        setResponseData('hello')
        console.log(responseData)
    }, [setResponseData, responseData])



  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Fetching Data with React Hooks
        </h1>
      </header>
    </div>
  );
}

export default App;
