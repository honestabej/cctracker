import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Header from "./components/Header/Header";


function App() {
  // const [token, setToken] = useState();

  // const [data, setData] = React.useState(null);
  // React.useEffect(() => {
  //   fetch("/username/'2'")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.username));
  // }, []);

  // if(!token) {
  //   return <signin setToken={setToken} />
  // }

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
