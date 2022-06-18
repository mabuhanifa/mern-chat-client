import { createContext, useContext, useEffect, useState } from "react";



const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  //const navigate = useNavigate();
  useEffect (() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if(!userInfo) {
      //navigate("/");
    }
    }
    , []);


  return (
    <ChatContext.Provider value={{ user, setUser }}>
      {children}
    </ChatContext.Provider>
  );
};
export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
