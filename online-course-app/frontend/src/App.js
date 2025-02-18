import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}


