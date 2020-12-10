import React, { useState, createContext } from "react";

const Context = createContext();
const ContextProvider = (props) => {

   // login state

   const [user, setUser] = useState({
    username: "",
    password: "",
    loading: false,
  });

  // Drawer
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };



  return (
    <Context.Provider
      value={{user, setUser,visible,showDrawer,onClose }}
    >
      {props.children}
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;
export { ContextProvider, Consumer, Context };