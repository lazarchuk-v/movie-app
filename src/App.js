import {Route, Routes} from "react-router-dom";

import './App.scss';
import {Header, MoviesList} from "./components";
import {Home} from "./components/Home/Home";
import React from "react";

function App() {

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/movies'} element={<MoviesList/>}/>
        </Routes>


    </div>
  );
}

export default App;
