import { useState } from "react";
import Chatbox from "../Component/Chatbox";
import SideDrawer from "../Component/miscellaneous/SideDrawer";
import MyChats from "../Component/MyChats";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <div className="box_main">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && 
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        }
      </div>
    </div>
  );
};

export default Chatpage;
