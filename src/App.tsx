import { useState } from 'react';
import Button from '@mui/material/Button';
import { revenues } from './data/revenues.data'
import { getTotal } from './utils/getTotal.utils';
import './App.css';

function App() {
  const [total, setTotal] = useState('')

  return (
    <div className="App">
      <h1>react-firebase-ci-cd-demo</h1>
      <div style={{
        width: '100%',
        margin: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        color: 'green'
      }}>
        {
          revenues.map((amt,i)=> (<span key={`${i}-${amt}`} style={{margin: '0.2rem'}}>{amt}</span>))
        }
      </div>
      <Button data-testid='abc123' onClick={() => setTotal(getTotal(revenues))} variant='contained' size='large'>Get Total</Button>
        <p>Total: <span style={{color: 'green'}}>{total}</span></p>
    </div>
  );
}

export default App;
