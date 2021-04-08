import React from 'react';
import Header from "./layout/header";
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "../routes";

function App() {
  return (
    <div className="App min-h-screen">
        <Router>
            <Header/>
            <main className="min-h-full">
                <div className="max-w-7xl mx-auto sm:px-6 min-h-full">
                    <div className="px-4 py-6 sm:px-0 bg-gray-100 min-h-full">
                        {AppRoutes}
                    </div>
                </div>
            </main>

        </Router>
    </div>
  );
}

export default App;
