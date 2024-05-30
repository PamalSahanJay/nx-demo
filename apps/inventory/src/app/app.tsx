// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import React, { useState } from 'react';
import { C_Button, C_Input, C_SearchBar } from '@org/common-ui-comp'
import { BrowserRouter, Route, Routes } from "react-router-dom"


import NxWelcome from './nx-welcome';

const clickButtonHandler = () => {
  console.log("button clicked and input = ", input)
}

const SearchBarHandler = () => {
  console.log("search bar logic")
}

const [input, setInput] = useState("")

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/atomic"
          element={
          <div>
            <C_Input type="text" placeholder="type here" value="" onChange={(e) => setInput(e.target.value)}></C_Input>
            <C_Button onClick={clickButtonHandler} children={"click me"}></C_Button>
          </div>} 
        />
        <Route path="/" element={<NxWelcome title="mono-integrated" />} />
        <Route path='/molecule' element = {<C_SearchBar onSearch={SearchBarHandler}></C_SearchBar>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
