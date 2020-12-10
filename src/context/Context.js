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
  const [returnVisible, setReturnVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const showReturnDrawer = () => {
    setReturnVisible(true);
  };

  const onReturnClose = () => {
    setReturnVisible(false);
  };



  return (
    <Context.Provider
      value={{user, setUser,visible,showDrawer,onClose,returnVisible,showReturnDrawer,onReturnClose }}
    >
      {props.children}
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;
export { ContextProvider, Consumer, Context };