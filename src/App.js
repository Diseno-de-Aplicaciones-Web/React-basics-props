import logo from './logo.svg';
import './App.css';

import TextoCualquiera from './components/TextoCualquiera';
import { useState } from 'react';

function App() {

  const [ palabro, setPalabro ] = useState("aceituna")

  return (
    <>
      <TextoCualquiera dynamicString="Lo que sea"/>
      <TextoCualquiera dynamicString="Otra cosa"/>
    </>


  );
}

export default App;
