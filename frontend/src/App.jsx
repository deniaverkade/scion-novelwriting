import { useEffect } from 'react';
import axios, { isCancel, AxiosError } from 'axios';
import './App.css'

function App() {

   useEffect(() => {
    fetch('http://localhost:4000/api/workouts')
      .then(res => res.json())
      .then(data => console.log('Data van backend:', data))
      .catch(err => console.error('Geen verbinding:', err));
  }, []);


  return (
    <>

    </>
  )
}

export default App
