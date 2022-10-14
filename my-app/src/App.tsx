import React from 'react';
import './App.css';

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

let printName: (name: string) => never;


// let personName: unknown;

// interface Person {
//   name: string;
//   age?: number;
// }

// interface Guy extends Person {
//   profession: string;
// }

// type X = {
//   a: string;
//   b: number;
// }

// let y: Guy = {
//   name: 'Leo',
//   profession: 'Software Enginerr'
// }


function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
