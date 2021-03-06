import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
    let [responseData, setResponseData] = React.useState('');   // new

    React.useEffect(() => {
            axios({
                "method": "GET",
                "url": "https://quotes15.p.rapidapi.com/quotes/random/",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "quotes15.p.rapidapi.com",
                    "x-rapidapi-key": process.env.REACT_APP_API_KEY
                }, "params": {
                    "language_code": "en"
                }
            })
                .then((response) => {
                    setResponseData(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
    },




  return (
    <div className="App">

      <header className="App-header">
        <h1>
          Fetching Data with React Hooks
        </h1>
      </header>
<main>

</main>

        {/* <pre>
        <code>
          {responseData && JSON.stringify(responseData, null, 4)}
        </code>
      </pre>*/}



    </div>
  );
}

export default App;
