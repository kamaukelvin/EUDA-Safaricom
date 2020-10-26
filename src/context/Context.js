import React, { useState, createContext } from "react";

const Context = createContext();
const ContextProvider = (props) => {

   // login state

   const [user, setUser] = useState({
    username: "",
    password: "",
    loading: false,
  });




  return (
    <Context.Provider
      value={{user, setUser }}
    >
      {props.children}
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;
export { ContextProvider, Consumer, Context };