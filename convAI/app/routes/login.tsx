import { useState } from "react";
import { postLoginData } from "~/api/request";

export default function Login(){
 const handleSubmit = async (e:any) => {
        e.preventDefault();
        
         let response = postLoginData({
                  email: inputEmail,
                  password: inputPassword,
                
                })
                response.then((res:any)=>{
                  console.log(res.data)
                })
     
  };

    const [inputEmail, setInputEmail] = useState("");
   const [inputPassword, setInputPassword] = useState("");


  return( 
    <div>
      <form onSubmit={handleSubmit}>
        <div className="signUp-container">
            <label>Sign In</label>
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
              <label className="signUp-label">Password</label>
              <input
                type="text"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                placeholder="Enter data"
              />
            </div>
           
            <button className="my-button" type="submit">Login</button>
        </div>
      </form>
        
    </div>
  )
}