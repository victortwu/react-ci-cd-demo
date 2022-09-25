import { useState } from 'react';
import Button from '@mui/material/Button';
import { revenues } from './data/revenues.data'
import { getTotal } from './utils/getTotal.utils';
import { getHtml } from './utils/getHtml.utils';  
import emailjs from '@emailjs/browser'
import './App.css';

function App() {
  const [total, setTotal] = useState('')

  const stringListArray = revenues.map(rev=> {
    return `<li style="width:33vw;list-style:none;margin:.5rem;padding:.5rem;background-color:#5579c6;color:white;border-radius:.3rem;">${rev}</li>`
  })

  const stringifiedElements = stringListArray.join('')
  
  const sendEmail = () => {
    emailjs.send(
      'service_qa1tglc',
      'template_kdsubla',
      { my_html: getHtml(stringifiedElements) },
      'user_DpQPC7Fuoft6fQqeSq44F')
      .then(res => console.log(res))
      .catch(e => console.error(e))
  }

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
          revenues.map((amt, i) => (<span key={`${i}-${amt}`} style={{ margin: '0.2rem' }}>{amt}</span>))
        }
      </div>
      <Button data-testid='abc123' onClick={() => setTotal(getTotal(revenues))} variant='contained' size='large'>Get Total</Button>
      <p>Total: <span style={{ color: 'green' }}>{total}</span></p>
      <Button onClick={sendEmail} variant='contained' size='large'>Send Email</Button>
    </div>
  );
}

export default App;
