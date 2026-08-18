import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState('Sign Up')

    return (
        <div className='login-popup'>
            <form className="login-popup-container">

                <div className="login-popup-title">
                    <h2>{currState}</h2>

                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt="close"
                    />
                </div>

                <div className="login-popup-inputs">

                    {currState === "Sign Up" && (
                        <input
                            type="text"
                            placeholder='Name'
                            required
                        />
                    )}

                    <input
                        type="email"
                        placeholder='Email'
                        required
                    />

                    <input
                        type="password"
                        placeholder='Password'
                        required
                    />

                </div>

                <button type="submit">
                    {currState === "Login" ? "Login" : "Sign Up"}
                </button>

                <p className='login-popup-condition'>
                    By continuing, you agree to tomato.com's Terms of Use and Privacy Policy
                </p>

                {currState === "Login" ? (
                    <p>
                        Create a new account?{" "}
                        <span onClick={() => setCurrState("Sign Up")}>
                            Sign Up
                        </span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <span onClick={() => setCurrState("Login")}>
                            Login
                        </span>
                    </p>
                )}

            </form>
        </div>
    )
}

export default LoginPopUp