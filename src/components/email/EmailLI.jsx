import React, { useState } from 'react'
import Profile from '../../ui/Profile';
import { getDate } from '../../utils/dateFormate';
import Button from '../../ui/Button';

export default function EmailLI({email, setIsOpen, isOpen, setIsRead, isRead, favEmail, fetchEmailBody}) {
    const {id, from, date, subject, short_description} = email;
    const {email: emailFrom, name} = from;
    const time = getDate(date);
    function setRead() {
        setIsOpen(email.id);
        setIsRead([...isRead, email.id]);
        // console.log(isOpen);
        fetchEmailBody(id, subject, time, name);

    }  
  return (
    <li className={`emailLi ${(isRead.includes(id)) ? 'read' : 'unread'} ${(isOpen === id) ? "isOpen" : ""} ` } onClick={() => {setRead()}}>
        <Profile displayName={name}/>
        <div className="email-details">
            <p className='from'>From:<span className='bold' >{name}</span> <span className='bold'>{"<"}{emailFrom}{">"}</span></p>
            <div className='email-des'>
                <p className='subject-p'>Subject:<span className='bold' >{subject}</span></p>
                {
                    isOpen !== null ?
                        <p>{short_description.toString().substring(0, 45)}...</p>
                    :
                        <p>{short_description}</p>
                }
                <div className="emailLi-time-fav-div">
                    <p>{time}</p> 
                    {favEmail.includes(id) && <p className='isFavorite'>Favorite</p>}
                </div>
            </div>
        </div>
    </li>
  )
}
