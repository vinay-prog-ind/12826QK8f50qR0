import React, { useEffect, useState } from 'react'
import Profile from '../../ui/Profile';
import Button from '../../ui/Button';

export default function EmailContainer({email, favEmail, setFavEmail}) {

  function setFavorite() {
    setFavEmail([...favEmail,email.id]);
    console.log(favEmail);
  }

  return (
    <section>
      <div className='emailContainer'>
        <Profile displayName={email.name}/>
      <div>
          <div className='emailTitleBar'>
            <div>
              <h2>{email.subject}</h2>
              <p>{email.time}</p>
            </div>
            <button className="favorite-btn" onClick={()=>setFavorite()}>{`${favEmail.includes(email.id) ? "Favorite" : "Mark as favorite"}`}</button>

          </div>
          <div className='emailBody-div'>
            <span className='emailBody' dangerouslySetInnerHTML={{ __html: email.body }}/> 
          </div>
        </div>
      </div>
    </section>
  )
}
