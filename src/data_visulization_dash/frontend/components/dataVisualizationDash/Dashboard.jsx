import React, {useState, useEffect} from 'react';
import Login from '../Login/Login';
import {BrowserRouter as DashRouter, Routes, Route } from 'react-router-dom';
import Register from '../Login/Register';
import API from '../../../../utils/api';


export default function Dashboard() {

    const [data, setData] = useState([]);
    const [verified, setVerified] = useState(false);
    const url = process.env.REACT_APP_DATA_VISUALIZATION_API;
    
    useEffect(()=>{

         var attempts = parseInt(localStorage.getItem("test"));
        localStorage.setItem("test", ++attempts);
        console.log(attempts);

        console.log("TST");
        async function fetchData() {
                try {
                        const token = localStorage.getItem("token");

                        const res = await API("/dashboard", "GET", null, token);
                        await setData(res);
                        console.log(data);
                    }
                catch (e) {

                }
        }
        fetchData();
        
    },[]);

    return(
        <div>
            DASHBOARD
            <div>
                {
                    data ? data.map((el, i) => <h4 key={i}>{el._id}</h4>) : <p>:/</p>
                }
            </div>
        </div>
    );
}