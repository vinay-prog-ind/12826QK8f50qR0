import React, { useState } from 'react'
import "./App.css";
import { NavLink } from 'react-router-dom';


export default function AppLayout({data}) {

  
  return (
    <div className='applayout'>
      <div className='applayout-innerdiv'>
        <section className='applayout-heading'>
          <h1>Fullstack-Test-2024-10-12</h1>        
          <h3>Attempt key: <span>12826QK8f50qR0</span></h3>
        </section>
        <ul className='applayout-ul'>
          <NavLink to="outlook"><p>Q1. Outlook</p></NavLink>
          <NavLink to="data-visualization-dash"><p>Q2. Data Visualization Dash</p></NavLink>
        </ul>
      </div>
    </div>
  )
}

