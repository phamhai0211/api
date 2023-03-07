import React from 'react';
import './login.scss'
const Login = () => {
    return <div className='login'>
        <div className="top">
            <div className="wrapper">
                <img className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
            </div>
        </div>
        <div className="container">
            <form >
                <h1>Sign in</h1>
                <input type="email" placeholder='Email address' />
                <input type="password" placeholder="Password" />
                <button className='buttonLogin'>
                    Sign in
                </button>
                <span>
                    New to Netflix? <b>Sign up now.</b>
                </span>
            </form>
        </div>

    </div>;
};

export default Login;
