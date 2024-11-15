import React, { useEffect, useState } from 'react'
import EmailLI from './EmailLI'


export default function EmailList({filter, email, setIsOpen, isOpen, setIsRead, isRead, favEmail, fetchEmailBody}) {



  return (
    <ul className={`emailList ${isOpen !== null ? "" : "master"}`}>

        {/* {email.map((el) => (<EmailLI key={el.id} email={el} setIsOpen={setIsOpen} isOpen={isOpen} setIsRead={setIsRead} isRead={isRead} fetchEmailBody={fetchEmailBody}/>))} */}
        {
          filter === "Read" ?
            email.filter(el => isRead.includes(el.id)).map((el) => (<EmailLI key={el.id} favEmail={favEmail} email={el} setIsOpen={setIsOpen} isOpen={isOpen} setIsRead={setIsRead} isRead={isRead} fetchEmailBody={fetchEmailBody} />))
          :
          filter === "Unread" ?  
            email.filter(el => !isRead.includes(el.id)).map((el) => (<EmailLI key={el.id} favEmail={favEmail} email={el} setIsOpen={setIsOpen} isOpen={isOpen} setIsRead={setIsRead} isRead={isRead} fetchEmailBody={fetchEmailBody} />))
          :
          filter === "Favorite" ?
            email.filter(el => favEmail.includes(el.id)).map((el) => (<EmailLI key={el.id} favEmail={favEmail} email={el} setIsOpen={setIsOpen} isOpen={isOpen} setIsRead={setIsRead} isRead={isRead} fetchEmailBody={fetchEmailBody} />))

          :email.map((el) => (<EmailLI key={el.id} favEmail={favEmail} email={el} setIsOpen={setIsOpen} isOpen={isOpen} setIsRead={setIsRead} isRead={isRead} fetchEmailBody={fetchEmailBody} />))
        }
    </ul>
  )
}
