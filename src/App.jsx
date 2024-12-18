import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css';
import AppLayout from './AppLayout';
import OutlookLayout from './outlook/components/OutlookLayout'
import Dashboard from './data_visulization_dash/frontend/components/dataVisualizationDash/Dashboard';
import Login from './data_visulization_dash/frontend/components/Login/Login';
import Register from './data_visulization_dash/frontend/components/Login/Register';

function App() {

  const [data, setData] = useState([]);
  localStorage.setItem("test", "0");
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
          <Route path='/data-visualization-dash/login' element={<Login />}/>
          <Route path='/data-visualization-dash/register' element={<Register />}/>
        </Routes>
      </Router>
      {/* <AppLayout data={data}/> */}
    </>
  );
}

export default App;
