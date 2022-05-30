import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Main from './components/Main';


function App() {
  const [token, setToken] = useState();

  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/username/'2'")
      .then((res) => res.json())
      .then((data) => setData(data.username));
  }, []);

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
