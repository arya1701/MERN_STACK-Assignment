import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/login/Login";
import Signup from "./components/auth/signup/Signup";
import Landingpage from "./components/layout/Landingpage";
import TopNavbar from "./components/layout/TopNavbar";
import Dashboard from "./components/layout/Dashboard";

function App() {
  return (
    <>
      <Router>
        <TopNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
