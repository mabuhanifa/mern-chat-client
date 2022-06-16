import { Route, Routes } from "react-router-dom";
import ChatPage from "./Component/ChatPage";
import Home from "./Component/Home";

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/chats" element={<ChatPage />} />
  </Routes>

  </>
  );
}

export default App;
