import React from 'react';
import {Link} from 'react-router-dom';

import './signup.css'
import NavBar from "./Navigation/NavBar";
import TopBanner from "./Navigation/TopBanner";
/*import HeroImage from "./Navigation/HeroImage";*/

function signup(){
    return (
        <div className="signUp"> 
        <TopBanner/>
        <NavBar/>
        
      
      
        <div className="signupscreen" alignItems="center">
          <div className="container">
            <div className="innerContainer">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                  // backgroundColor: 'red',
                }}
              >
                <div style={{cursor: 'pointer'}} >
                  <i class="fas fa-arrow-circle-left fa-5x"></i>
                </div>
                <p>Signup</p>
              </div>
    
              <label for="fname">Full Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your full name.."
                
              />
    
              <label for="email">Email</label>
              <input
                type="email"
                id="lname"
                name="email"
                placeholder="Your email.."
                
              />
              <label for="password">Password</label>
              <input
                type="password"
                id="lname"
                name="password"
                placeholder="Your Password.."
                
              />
    
              <Link to="/signin" className="link">
                <span>Already have an account ?</span>
              </Link>
              <br />
    
              <input type="submit" value="Sign up"  />
            </div>
          </div>
        </div>
        </div>
      )

}

export default signup