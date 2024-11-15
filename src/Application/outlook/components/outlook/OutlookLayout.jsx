import React, {useEffect, useState} from 'react'
import FilterBar from './filter/FilterBar'
import EmailContainer from './email/EmailContainer'
import EmailUL from './email/EmailUL'

export default function OutlookLayout() {
    const [emails, setEmails] = useState({});
    const [isOpen, setIsOpen] = useState(null)
    const [isRead, setIsRead] = useState([]);
    const [favEmail, setFavEmail] = useState([]);

    const[filter, setFilter] = useState("All");

        const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchMovie() {
        const res = await fetch("https://flipkart-email-mock.vercel.app/");
        const emails = await res.json();
        setData(emails.list);
        }

        fetchMovie();
    }, []);

    async function  fetchEmailBody (id, subject, time, name){
    const res = await fetch(`https://flipkart-email-mock.vercel.app/?id=${id}#`)
    const resEmails = await res.json();
    setEmails({body:resEmails.body, subject, time, name, id});
  }
  return (
    <>
          <div className='body'>
        <FilterBar setFilter={setFilter} setIsOpen={setIsOpen}/>
        <div className='layoutContainer'>
            <EmailUL filter={filter} email={data} setIsOpen={setIsOpen} isOpen={isOpen} setIsRead={setIsRead} isRead={isRead} favEmail={favEmail} fetchEmailBody={fetchEmailBody}/>
            {isOpen !== null?  (
                <EmailContainer email={emails} favEmail={favEmail} setFavEmail={setFavEmail}/>
            ) : ""}
        </div>
        </div>
    </>
  )
}
