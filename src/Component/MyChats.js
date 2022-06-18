import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { ChatState } from "../Context/ChatProvider";

const MyChats = () => {
    const toast = useToast();
    const [loggedUser, setLoggedUser] = useState();
    const { user, setUser , selectedChat, setSelectedChat,chats, setChats} = ChatState();
    return (
        <div>
            ggggg sfsf
        </div>
    );
};

export default MyChats;