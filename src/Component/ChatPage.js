import axios from 'axios';
import { useEffect } from "react";

const ChatPage = () => {
    const fetchChat = async() => {
        const data = await axios.get('/api/chat');
        console.log(data);
    }
    useEffect(() => {
        fetchChat();
    }
    , []);

    return (
        <div>
            chat
        </div>
    );
};

export default ChatPage;