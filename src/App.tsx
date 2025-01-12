import { BrowserRouter, Route, Routes } from "react-router";

import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/home/Home";
import Event from "./pages/event/Event";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import MBTITest from "./pages/MBTITest/MBTITest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/event" element={<Event />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<MBTITest />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
