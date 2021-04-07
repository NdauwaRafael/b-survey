import React from 'react';
import Header from "./layout/header";
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "../routes";

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            {AppRoutes}
        </Router>
    </div>
  );
}

export default App;
