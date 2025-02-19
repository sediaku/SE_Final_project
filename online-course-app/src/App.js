import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/LoginPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}


