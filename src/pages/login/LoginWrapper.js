import React, { useContext, useState } from "react";
import Login from "./Login";
import { useHistory } from "react-router-dom";
import { api_srv } from "../../services";
import {Context} from '../../context/Context'

const LoginWrapper = () => {
  const history = useHistory();
  const { user, setUser } = useContext(Context);

  const [showAlert, setShowAlert]= useState(false)

  const handleLogInChange = (evt) => {
    const { value, name } = evt.target;

    setUser({
      ...user,
      [name]: value,
    });
  };


  const login = async () => {

   sessionStorage.setItem("token","logged in")
    history.push("/dashboard");
    // setUser({ ...user, loading: true });

    // try {
    //   let login_resp = await (await api_srv).login(user);
    //   console.log("the response from login is", login_resp);
    //   history.push("/dashboard");

    //   setUser({
    //     ...user,
    //     username: "",
    //     password: "",
    //     loading: false,
    //   });
    // } catch (err) {
    //   let error = await err;
    //   console.log("login error is", error);
    //   setUser({
    //     ...user,
    //     username: "",
    //     password: "",
    //     loading: false,
    //   });
    //   isetShowAlert(true)
    // }
  };

  return <Login state={user} onChange={handleLogInChange} login={login} showAlert={showAlert}/>;
};

export default LoginWrapper;
