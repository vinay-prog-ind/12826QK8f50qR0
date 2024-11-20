import React, {useState, useEffect} from 'react';
import Login from '../Login/Login';

export default function Dashboard() {

    const [data, setData] = useState([]);

    useEffect(()=>{
        async function fetchData() {
                try {

                        const res = await fetch('http://localhost:5000/data-visualization-dash', {
                        // await fetch('127.0.0.1:5000/data-visualization-dash', {
                            method: "GET",
                            mode: 'cors',
                        });
                        const d = await res.json();
                        setData(d.data);
                    }
                catch (e) {

                }
        }
        fetchData();
    },[]);

    return(
        <>
            <Login />
            <div>
                <ul>
                    {data.map((el, i) => <li>{i}{") "} {" "}{el.Age}</li>)}
                </ul>
            </div>
        </>
    );
}