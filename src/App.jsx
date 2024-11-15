import { useEffect, useState } from 'react';
import './App.css';
import AppLayout from './AppLayout';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch("https://flipkart-email-mock.vercel.app/");
      const emails = await res.json();
      setData(emails.list);
    }

    fetchMovie();
  }, []);
    

  return (
    <AppLayout data={data}/>
  );
}

export default App;
