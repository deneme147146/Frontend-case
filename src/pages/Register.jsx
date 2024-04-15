import { useState } from 'react';
import { register } from '../firebase';


const Register = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = async e => {
        e.preventDefault()
    
        const user= await register(email,password)
        console.log(user)
      
      }

    return(
        <form onSubmit={handleSubmit}>
            
            <input value={email} type='text' placeholder='email' onChange={(e)=> setEmail(e.target.value)}></input>
            <input value={password} type='password' placeholder='password' onChange={(e)=> setPassword(e.target.value)}></input>
            <button disabled={!email || !password} type='submit'>kayıt ol</button>

            </form>
    )
}

export default Register