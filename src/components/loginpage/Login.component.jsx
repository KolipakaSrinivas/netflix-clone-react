import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import './login.style.css'


function Login() {
    return(
        <Fragment>
           <div className="login-top">
        <img src="./images/logo.png" alt=""/>
    </div>

    <div className="d-flex justify-content-center align-items-center" style={{width: "100vw"}}>
        <section className="login-box">
            <h2 className="text-white">Sign In</h2>
            <form className="mt-4">
                <div className="mb-3 bg-white rounded px-2" >
                  <label htmlFor="exampleInputEmail1" className="form-label small-text">Email or Phone Number</label>
                  <input type="email" className="form-control border-0 p-0" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  
                </div>
                <div className="mb-3 bg-white rounded px-2">
                  <label htmlFor="exampleInputPassword1" className="form-label small-text" autoComplete="off">Password</label>
                  <input type="password" className="form-control border-0 p-0" id="exampleInputPassword1"/>
                </div>
                <a href="#" type="submit" className="btn btn-danger mt-3" id="jjj"><Link to='/home'>Sign In</Link></a>
                <div className="mb-3 mt-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label text-white small-text" htmlFor="exampleCheck1">Remember Me</label>
                </div>
                
                <div className="mt-3 d-flex">
                    <img width="20px" src="./images/fb.png" alt=""/>
                    <p className="m-0 small-text text-white mx-2">Login with Facebook</p>
                </div>
                <div className="mt-3 ">
                    {/* <!-- <img width="20px" src="./images/fb.png" alt=""> --> */}
                    <p className="m-0  text-white"> <span className='singup'>New to Netflix?</span>  Sign up now.</p>
                    <p className="m-0 small-text text-white  mt-2"> <span  className='thispage'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span href="#"> Learn more.</span> </span> </p>
                </div>
              </form>
        </section>
    </div>
        </Fragment>
    )
}

export default Login