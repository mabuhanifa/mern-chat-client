import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";

const ChatPage = () => {
  const { user } = ChatState();
  return <div style={{ width: "100%" }}>
    {user &&<SideDrawer/>}
    <Box>

    </Box>
  </div>;
};

export default ChatPage;
