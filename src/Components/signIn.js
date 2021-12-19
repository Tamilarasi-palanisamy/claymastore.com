import React from 'react';
import {Link} from 'react-router-dom';
import './signIn.css'
import NavBar from "./Navigation/NavBar";
import TopBanner from "./Navigation/TopBanner";
/*import HeroImage from "./Navigation/HeroImage";*/

function signIn(){
    return (
      <div className="signIn"> 
      <TopBanner/>
        <NavBar/>
    
        <div className="signinscreen" > 
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
                <p>Sign In</p>
              </div>
    
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
    
              <Link to="/signup" className="link">
                <span>Creat a new account ?</span>
              </Link>
              <br />
    
              <input type="submit" value="Sign in"  />
            </div>
          </div>
        </div>
        </div>
      )

}

export default signIn