import React from 'react';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>react-firebase-ci-cd-demo</h1>
      <Button onClick={()=> alert('Hello There!')} variant='contained' size='large'>I'm a MUI Button</Button>
    </div>
  );
}

export default App;
