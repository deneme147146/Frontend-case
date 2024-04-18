import { useState } from "react";
import { login } from "../firebase";
import "../style/Login.css";
import Register from "./Register";
import { useDispatch } from "react-redux";
import { login as loginHandler } from "../store/actions/authActions";




const Login = () => {

    const dispatch = useDispatch()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await login(email, password);
    dispatch(loginHandler(user))
    console.log(user);

  };


 

  return (

    <div className="login-box">



    <div style={{margin:30}} className="login-container">

        <p className="giris-name">Giriş yap</p>
          <form onSubmit={handleSubmit}>
              <input className="inpt"
                  style={{ display: "block", height: 35, width: 300, marginTop: 10 }}
                  value={email}
                  type="text"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input className="inpt"
                  style={{
                      display: "block",
                      marginTop: 10,
                      marginBottom: 10,
                      height: 35,
                      width: 300,
                  }}
                  value={password}
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
              ></input>
              <button disabled={!email || !password} type="submit">
                  giriş yap
              </button>
          </form>
      </div><div className="register-container">
              <Register></Register>
          </div>

          </div>
  );
};

export default Login;
