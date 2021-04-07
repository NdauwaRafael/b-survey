import React from 'react';
import Header from "./layout/header";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
        </Router>
    </div>
  );
}

export default App;
