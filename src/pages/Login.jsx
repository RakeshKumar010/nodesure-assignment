import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";

const Login = () => {
  const navigater = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loginError, setLoginError] = useState(null);
  const submitFun = async (e) => {
    e.preventDefault();
    let loginData = await fetch("http://localhost:8000/", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    loginData = await loginData.json();
   

    if (loginData.error == "not avai") {
      console.log("data not found");
      setLoginError("Enter Valid username and password")
    } else {
      navigater("/product");
      
    }

  };
  const changeFun = (e) => {
    const { value, name } = e.target;
    if (name == "username") {
      setUsername(value);
    }
    if (name == "password") {
      setPassword(value);
    }
  };
  return (
    <div className=" rounded-md border-dotted border-2 bg-gray-100/40 backdrop-blur-3xl lg:w-2/3 w-full lg:h-4/5 flex lg:flex-row flex-col justify-around items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold  welcm-text lg:block hidden">
          Welcome Back
        </h1>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/create-account-6333606-5230166.png"
          alt=".."
          className="w-1/2 lg:w-auto login-img"
        />
      </div>
      <div className="flex gap-9 flex-col border-dotted border-2 lg:p-10 p-5 lg:w-2/5 w-full rounded-sm border-black">
        <div>
          <h1 className="text-4xl font-extrabold">Log in</h1>
          <p>Please fill your information bellow</p>
        </div>
        <form action="#" className="flex flex-col gap-4" onSubmit={submitFun}>
          <div className="flex gap-4 border-b-2 border-gray-600">
            <p className="whitespace-nowrap">EMAIL ID</p>
            <input
              type="email"
              placeholder="ex@mail.com"
              className="bg-transparent  w-full outline-0  placeholder-gray-800"
              onChange={changeFun}
              name="username"
            required/>
          </div>
          <div className="flex gap-4 border-b-2 border-gray-600">
            <p>PASSWORD</p>
            <input
              type="password"
              placeholder="* * * * * *"
              name="password"
              className="bg-transparent w-full outline-0  placeholder-gray-800"
              onChange={changeFun}
            required/>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" id="remember" name="remember" />
              <label for="remember">Remember me</label>
            </div>
            <p className="underline">Forget Password?</p>
          </div>
          {loginError?<p className="text-red-500">{loginError}</p>:''}
          <button className="w-full mt-4 rounded-md p-3 hover:shadow-md bg-indigo-400 hover:bg-indigo-500 text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
