import React from 'react'

export default function Profile({displayName}) {

  
  
  return (
    <div className='profile'>
      <div className='profileName-wrapper'>
        {displayName === undefined ?
          <h1>-</h1>
          : <h2>{displayName.toString().substring(0, 1).toUpperCase()}</h2>
        }
      </div>
    </div>
  )
}
