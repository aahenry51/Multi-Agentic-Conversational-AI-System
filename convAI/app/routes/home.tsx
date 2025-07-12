import React, { useState } from 'react';
import type { Route } from "./+types/home";
import './styles.css'; 
import { postSignUpData } from '~/api/request';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}



export default function Home() {

  const handleSubmit = async (e:any) => {
        e.preventDefault();
        //console.log(inputFirst)
        postSignUpData({
          first: inputFirst,
          last: inputLast,
          company: inputCompany,
          email: inputEmail,
          password: inputPassword,
        
        })
  };

  const [inputFirst, setInputFirst] = useState("");
  const [inputLast, setInputLast] = useState("");
  const [inputCompany, setInputCompany] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  return( 
    <div>
      <form onSubmit={handleSubmit}>
        <div className="signUp-container">
            <label>Sign Up</label>
            
            <div className="signUp-formItems">
              <label className="signUp-label">First name</label>
              <input
                type="text"
                value={inputFirst}
                onChange={(e) => setInputFirst(e.target.value)}
                placeholder="Enter data"
              />
            </div>
            <div className="signUp-formItems">
              <label className="signUp-label">Last name</label>
              <input
                type="text"
                value={inputLast}
                onChange={(e) => setInputLast(e.target.value)}
                placeholder="Enter data"
              />
            </div>
            <div className="signUp-formItems">
              <label className="signUp-label">Company</label>
              <input
                type="text"
                value={inputCompany}
                onChange={(e) => setInputCompany(e.target.value)}
                placeholder="Enter data"
              />
            </div>
            <div className="signUp-formItems">
              <label className="signUp-label">Email</label>
              <input
                type="text"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                placeholder="Enter data"
              />
            </div>
            <div className="signUp-formItems">
              <label className="signUp-label">New Password</label>
              <input
                type="text"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                placeholder="Enter data"
              />
            </div>
            <button className="my-button" type="submit">Send Data</button>
        </div>
      </form>
        
    </div>
  )
}
