// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Pamal }  from '@wiley/common-ui';

import { BrowserRouter, Route, Routes } from "react-router-dom"

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/common" element={<div>hi</div>} />
          <Route path="/" element={<NxWelcome title="mono-integrated" />} />
          <Route path="/pamal" element={<Pamal />} />
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
