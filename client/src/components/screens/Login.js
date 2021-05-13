import React from 'react'
import { Link } from 'react-router-dom'

export const Signin = () => {
    return (
        <div className="mycard">
           <div className="card auth-card">
           <h3>The Social Network</h3>
           <input
           type="text"
           placeholder="Email"/>
           <input
           type="text"
           placeholder="Password"/>
           <button className="btn waves-effect waves-light ##008B8B" type="submit" name="action">Login
              <i className="material-icons right">send</i>
           </button>
           <h6>
           <Link to="/signup">Don't have an account? Click here</Link>
           </h6>
           </div>
        </div>   
    )
} 