import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// import { useState } from "react";
import Homepage from "./pages/Homepage/Homepage";
import Sidebar from "./components/sidebar/Sidebar";
import ProfileSidebar from "./components/sidebar/ProfileSidebar";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Post from "./components/post/Post";
import AboutPage from "./pages/AboutPage/AboutPage";
import Protected from "./components/protected_route/Protected";
import { useAppSelector } from "./hooks/useReduxHooks";

const App = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const { isLoginSuccessFul } = useAppSelector((state) => state.auth);
  return (
    <Router>
      <div className="flex justify-center h-screen">
        <Sidebar isAuthenticated={isLoginSuccessFul} />
        <div className=" w-[1136px] bg-slate-600 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/posts"
              element={
                <Protected>
                  <Post />
                </Protected>
              }
            />
            <Route path="/post/:postId" element={<Signup />} />
          </Routes>
        </div>

        <ProfileSidebar isAuthenticated={isLoginSuccessFul} />
      </div>
    </Router>
  );
};

export default App;
