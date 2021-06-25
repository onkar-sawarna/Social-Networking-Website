import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../App'
const Navbar=()=>{
  const {state,dispatch} = useContext(UserContext)
  const history = useHistory()

  const renderList = ()=>{
    if(state){
      return [<>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/create">Create Post</Link></li>
        <li><button className="btn waves-effect waves-light #008B8B blue" type="submit" name="action"
        onClick={()=>{
          localStorage.clear()
          dispatch({type:"CLEAR"})
          history.push("/signin")
        }}>Logout
              <i className="material-icons"
              >send</i>
           </button></li>
     </> ]
    }else{
      return[<>
        <li><Link to="/signin">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
     </> ]
    }
  }
    return(<nav>
    <div className="nav-wrapper">
      <Link to={state?"/":"/signin"} className="brand-logo left b">The Social Network</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {renderList()}
      </ul>
    </div>
  </nav>)
}

export default Navbar