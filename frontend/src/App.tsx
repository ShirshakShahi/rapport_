import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Homepage from "./pages/Homepage/Homepage";
import Sidebar from "./components/sidebar/Sidebar";
import ProfileSidebar from "./components/sidebar/ProfileSidebar";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  return (
    <Router>
      <div className="flex justify-center h-screen">
        <Sidebar isAuthenticated={isAuthenticated} />
        <div className=" w-[1136px] bg-slate-600 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>

        <ProfileSidebar isAuthenticated={isAuthenticated} />
      </div>
    </Router>
  );
};

export default App;
