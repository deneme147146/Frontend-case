import { useState } from 'react';
import { register } from '../firebase';



const Register = () => {



    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = async e => {
        e.preventDefault()
    
        const user= await register(email,password , name)
      
        console.log(user)
      
      }

    return(
        <div style={{margin:10, marginTop:45}}>

            <p>
                Kayıt ol
            </p>
    
        <form onSubmit={handleSubmit}>
            
            <input style={{display:'block',  height:35 , width:300,marginTop:10,}} value={name} type='text' placeholder='name' onChange={(e)=> setName(e.target.value)}></input>
            <input style={{display:'block',  height:35 , width:300,marginTop:10,}} value={email} type='text' placeholder='email' onChange={(e)=> setEmail(e.target.value)}></input>
            <input style={{display:'block',marginTop:10, marginBottom:10, height:35, width:300,}} value={password} type='password' placeholder='password' onChange={(e)=> setPassword(e.target.value)}></input>
            <button disabled={!email || !password} type='submit'>kayıt ol</button>

            </form>
            </div>
    )
}

export default Register