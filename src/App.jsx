import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css';
import AppLayout from './AppLayout';
import OutlookLayout from './outlook/components/OutlookLayout'
import Dashboard from './data_visulization_dash/frontend/components/dataVisualizationDash/Dashboard';

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
          <Route path='/data-visualization-dash' element={<Dashboard/>}/>
        </Routes>
      </Router>
      {/* <AppLayout data={data}/> */}
    </>
  );
}

export default App;
