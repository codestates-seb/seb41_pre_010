import React from "react"
import './Styles/SignUp.css'

export default function SignUp(){

  return(
    <>
      <header className="Header"></header>
      <main>
        <div className="SignUp_Container">
          <div className="SignUp_Content">
            <div className="User_Info_Enter_Container">
              <div className="Display_Name_Container">
                <span>dispay Name</span>
                <input></input>
              </div>
              <div className="Email_Container">
              <span>dispay Name</span>
                <input></input>
              </div>
              <div className="Password_Container">
              <span>dispay Name</span>
                <input></input>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="Footer"></footer>
    </>
  )
}