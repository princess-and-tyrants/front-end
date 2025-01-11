import { BrowserRouter, Route, Routes } from "react-router";

import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/home/Home";
import Rank from "./pages/rank/Rank";
import Event from "./pages/event/Event";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/event" element={<Event />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
