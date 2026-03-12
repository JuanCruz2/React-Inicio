// 1) import the React and ReactDOM libraries   
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell react to tell control of that element
const root = ReactDOM.createRoot(el)

function FirstComponent() {
  return <h1>Hello, World!</h1>;
}
export default FirstComponent;
// 4) show the component on the screen
root.render(<App />); 