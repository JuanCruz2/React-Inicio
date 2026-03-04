// 1) import the React and ReactDOM libraries   
import React from 'react';
import ReactDOM from 'react-dom/client'

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell react to tell control of that element
const root = ReactDOM.createRoot (el)

// 4) create a component 
function App() {
    const name = 'Juan';
    const age = '29';
    return <h1>My name is {name} and my age is {age}</h1>
}
// 5) show the component on the screen
root.render(<App />);