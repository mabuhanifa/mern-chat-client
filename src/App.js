import { Route, Routes } from "react-router-dom";
import Chatpage from "./Pages/ChatPage";
import Home from "./Pages/Home";

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/chats" element={<Chatpage />} />
  </Routes>

  </>
  );
}

export default App;
