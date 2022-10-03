import { useCallback, useState } from "react";
import "./App.css";
import Compo1 from "./Compo1";
import Compo2 from "./Compo2";
import Compo3 from "./Compo3";

function App() {
  const [compo2value, setCompo2value] = useState("");
  const [compo3value, setCompo3value] = useState("");
  const [compo2input, setCompo2input] = useState("");
  const compo1value = (e) => {
    setCompo2value(e);
  };

  const compo2valuefunc = (e) => {
    setCompo2input(e);
  };

  const compo3valuefunc = (e) => {
    setCompo3value(e);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Component 1 : {compo3value}</h2>
        &nbsp;
        <Compo1 getText={compo1value} />
        <Compo2 compo1PassedVal={compo2value} getText={compo2valuefunc} />
        <Compo3 compo2PassedVal={compo2input} getText={compo3valuefunc} />
      </header>
    </div>
  );
}

export default App;
