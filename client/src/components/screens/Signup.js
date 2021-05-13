import React from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
    return (
        <div className="mycard ">
           <div className="card auth-card ">
           <h3>The Social Network</h3>
           <input
           type="text"
           placeholder="Enter your Name"/>
           <input
           type="text"
           placeholder="Email"/>
           <input
           type="text"
           placeholder="Password"/>
           <button class="btn waves-effect waves-light #008B8B" type="submit" name="action">Login
              <i class="material-icons right">send</i>
           </button>
           <h6><Link to="/signin">Already have an account?</Link></h6>
           </div>
        </div>   
    )
} 