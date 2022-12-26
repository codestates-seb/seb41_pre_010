import React from "react"
import "./Styles/Login.css"


export default function Login(){

  return(
    <>
      <header className="Header"></header>
      <main>
        <div className="Login_Container">
          <div className="Login_Content">
            <div className="User_Info_Enter_Container">
              <div>
                <div className="Email_Container">
                  <span>이메일</span>
                  <input></input>
                </div>
                <div className="Password_Container">
                  <span>비밀번호</span>
                  <input></input>
                </div>
              </div>
              <button className="Login_Button">Log In</button>
            </div>
          </div>
          <span className="No_Account_Message">
            계정이 없으신가요? Sign Up
          </span>
        </div>
      </main>
    </>
  )
}