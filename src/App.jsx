import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./screen/Dashboard";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex h-screen">
      <Router>
        <SideBar />

        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Dashboard />} />
          <Route path="/transactions" element={<Dashboard />} />
          <Route path="/crypto" element={<Dashboard />} />
          <Route path="/message" element={<Dashboard />} />
          <Route path="/exchange" element={<Dashboard />} />
          <Route path="/setting" element={<Dashboard />} />
          <Route path="/security" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
