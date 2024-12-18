import React, { useState } from "react";
import API from "../../../../utils/api";
import SignInSwitch from "./SignInSwitch";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useState({ user: "", password: "" });
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await API("/login", "POST", formData);
            localStorage.setItem("token", data.token);
            console.log(data.token);
            navigate("/data-visualization-dash");            
        } catch (err) {
            if (err.status == 500) {
                setError("Invalid user or password, try again!");
            } else {
                setError(err.message);
            }
        }
    };

    return (
        <div className="login">
            <div className="login-inner">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <section className="sign-in">
                        <h3>Log In</h3>
                        {setError == "" ? "" : <h5>{error}</h5>}
                        <input type="text" placeholder="username..." onChange={(e) => { setFormData({ ...formData, user: e.target.value })}}
                        />
                        <br />
                        <span>
                            <input type="password" placeholder="password..." onChange={(e) => { setFormData({ ...formData, password: e.target.value}) }}
                            /> <br />
                        </span>
                        <button id="sign-in-btn" type="submit">
                            Sign-in
                        </button>
                    </section>
                </form>
            </div>
            <SignInSwitch navigateTo={"/data-visualization-dash/register"}>Already registered? Log-in.</SignInSwitch>
        </div>
    );
}
