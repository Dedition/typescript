import React, { useState } from 'react';
import { InputField } from './components/InputField';
import './App.css';

const App: React.FC = () => {
  const [todo, setTodo] = useState<number | string>("");


  return (
    <div className="App">
      <span className="heading">Tasks of Many</span>
      <InputField />
    </div>
  );
}

export default App;
