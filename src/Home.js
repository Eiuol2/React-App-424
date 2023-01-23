import { useAuth } from "./context/AuthProvider";
import { useState } from 'react';


export const Home = () => {
const { value } = useAuth();
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');  




    function handelS() {
        if ((username === "test") && (password === "123")){
            return value.onLogin()
        } else{
           alert('Not Authorized')
        }
    }



  return ( 
    
    <>
      <h2>Home (Public)</h2>
      
      <form >
        <label>
            Username: 
            <input value={username} type="text" name="name" onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label>
            Password: 
            <input value={password }type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
         </label>


         <button type="button" onClick={handelS}>          Sign In
        </button>


        
      </form>

      

      

    </>
  );
  };