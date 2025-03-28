import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./admin/products/List";
import Login from "./pages/Login";
import Home from './pages/Home'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin/products" element={<List/>} />
      </Routes>
    </Router>
  );
}

export default App;
