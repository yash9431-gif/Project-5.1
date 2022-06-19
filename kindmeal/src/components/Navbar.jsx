import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import kind from "../Images/kindmeal.png"
import blog from "../Images/blog.png"
import fb from "../Images/fb.png"
import twitter from "../Images/twitter.png"
import "../styles/Navbar.css"


const Navbar = () => {
    const {isAuth,logout} = useContext(AuthContext)

const navigate = useNavigate()

    const handleLoginClick = () => {
        if (isAuth) {
            logout()
          
        } else {
             navigate("/login")
        }
       
    }
  return (
      <div className='Navbar'>
         <Link to=""> <div className='kindimg'><img src={kind} alt="" /></div></Link>
        
          <div className='headimg'>
              <img src={blog} alt="" />
          <img src={fb} alt="" />
           <img src={twitter} alt="" /></div>
          <div className='Headbtn'>
              <button>Sing Up</button>
              {/* <Link to="/signup">Signup</Link> */}
              <button>Facebook</button>
              <button>Email</button>
          </div>
        
          
           {/* <Link to="">Home</Link>  */}
           {/* <Link to="/posts">Posts</Link>
          <Link to="/feeds">Feeds</Link>  */}
         <div className='headlogin'> <button onClick={handleLoginClick}>
              {isAuth ? "Logout" : "Login"}</button>
        </div>
         
         
    </div>
  )
}

export default Navbar



//  <img src={kind} alt="" />
//           <img src={blog} alt="" />
//           <img src={fb} alt="" />
//           <img src={twitter} alt="" />
//           <button>Facebook</button>
//           <button>Email</button>