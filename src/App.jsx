import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css';
import AppLayout from './AppLayout';
import OutlookLayout from './Application/outlook/components/outlook/OutlookLayout'
import DataVisulizationDash from './Application/data_visulization_dash/dataVisulizationDash/DataVisulizationDash';

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
    <>
      <Router>
        <Routes>
          <Route path='/' index element={<AppLayout/>}/>
          <Route path='/outlook' element={<OutlookLayout/>}/>
          <Route path='/data-visualization-dash' element={<DataVisulizationDash/>}/>
        </Routes>
      </Router>
      {/* <AppLayout data={data}/> */}
    </>
  );
}

export default App;
