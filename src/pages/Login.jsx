import { useState } from 'react';
import { login } from '../firebase';



const Login = () =>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = async e => {
        e.preventDefault()
    
        const user= await login(email,password)
        console.log(user)
      
      }

    return(
        <form onSubmit={handleSubmit}>
            
            <input value={email} type='text' placeholder='email' onChange={(e)=> setEmail(e.target.value)}></input>
            <input value={password} type='password' placeholder='password' onChange={(e)=> setPassword(e.target.value)}></input>
            <button disabled={!email || !password} type='submit'>giriş yap</button>

            </form>
    )
}


export default Login