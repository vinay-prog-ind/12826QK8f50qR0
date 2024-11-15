import React, { useEffect, useState } from 'react'
import "./App.css";
import EmailUL from './components/email/EmailUL'
import EmailContainer from './components/email/EmailContainer';
import FilterBar from './components/filter/FilterBar';

export default function AppLayout({data}) {
  const [emails, setEmails] = useState({});
  const [isOpen, setIsOpen] = useState(null)
  const [isRead, setIsRead] = useState([]);
  const [favEmail, setFavEmail] = useState([]);

  const[filter, setFilter] = useState("All");

  async function  fetchEmailBody (id, subject, time, name){
    const res = await fetch(`https://flipkart-email-mock.vercel.app/?id=${id}#`)
    const resEmails = await res.json();
    setEmails({body:resEmails.body, subject, time, name, id});
  }

  
  return (
  <div className='body'>
    <FilterBar setFilter={setFilter} setIsOpen={setIsOpen}/>
    <div className='layoutContainer'>
      <EmailUL filter={filter} email={data} setIsOpen={setIsOpen} isOpen={isOpen} setIsRead={setIsRead} isRead={isRead} favEmail={favEmail} fetchEmailBody={fetchEmailBody}/>
        {isOpen !== null?  (
          <EmailContainer email={emails} favEmail={favEmail} setFavEmail={setFavEmail}/>
        ) : ""}
    </div>
    </div>
  )
}

