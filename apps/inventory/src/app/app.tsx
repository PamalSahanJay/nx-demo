// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import {C_Button} from '@org/common-ui-comp'
import { BrowserRouter, Route, Routes } from "react-router-dom"


import NxWelcome from './nx-welcome';

const clickButtonHandler = () => {
  console.log('button clicked')
}

export function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/button" element={ <C_Button onClick={clickButtonHandler} children={"click me"}></C_Button>} />
      <Route path="/" element={<NxWelcome title="mono-integrated" />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
