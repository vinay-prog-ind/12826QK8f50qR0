import React, { useState, useEffect } from "react";
import API from "../../../../utils/api";
import SignInSwitch from "./SignInSwitch";

import { useNavigate } from "react-router-dom";

export default function Register() {
    const [formData, setFormData] = useState({
        user: "",
        password: "",
        confirm: "",
    });

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await API("/signup", "POST", formData);
            console.log(data);

            navigate("/data-visualization-dash/login");            

        } catch (err) {
            setError(err);
        }
        // setFormData({user: "", password: "", confirm: ""});
    };

    return (
        <div className="login">
            <div className="login-inner">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <section className="sign-in">
                        <h3>Register</h3>
                        <input type="text"placeholder="Username..." onChange={(e) =>setFormData({...formData,user: e.target.value})}/> <br />
                        <input type="password" placeholder="Password..." onChange={(e) => setFormData({...formData, password: e.target.value,})}/><br/>
                        <span>
                            <input type="password" placeholder="Confirm Password..." onChange={(e) => setFormData({...formData, confirm: e.target.value})}/> <br />
                            <button type="submit" id="register-btn">
                                Register
                            </button>
                        </span>
                    </section>
                </form>
            </div>
            <SignInSwitch navigateTo={"/data-visualization-dash/login"}>Don't have an account? Register.</SignInSwitch>
        </div>
    );
}
