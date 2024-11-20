import React, {useState} from 'react';



export default function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

  return(
  <div className='login'>
    <div className='login-inner'>
      <h1>Sign In</h1>
      <section className='Register'>
        <h3>Register</h3>
        <section id='register-input-div'>
          <input type="text" placeholder='username...'/>
          <input type="password" placeholder='password...' />
          <button id="register-btn">Register</button>
        </section>
      </section>
      <section className="sign-in">
        <h3>Sign-in</h3>
        <input type="text" placeholder='username...'/><br />
        <span>
          <input type="password" placeholder='password...' />
          <button id="sign-in-btn">Sign-in</button>
        </span>
      </section>
    </div>
  </div>
  );  
} 