import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../../utils/api";

export default function SignInSwitch({navigateTo, children}) {

    const navigate = useNavigate();

    const handleOnClick = async (e) => {
        e.preventDefault();
        navigate(`${navigateTo}`)

    };

    return (
        <p
                id="changeView_login"
                onClick={handleOnClick}>
                {children}
        </p> 
    );
}
