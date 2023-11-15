import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Signup from "./views/Signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
