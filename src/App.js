import { Route, Routes } from "react-router-dom";
import ChatPage from "./Pages/ChatPage";
import Home from "./Pages/Home";

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
