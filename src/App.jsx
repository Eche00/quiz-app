import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Java from "./pages/Javahome";

import Landingpage from "./components/landingpage";
import Javaeasy from "./pages/javalevel/Javaeasy";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/javahome" element={<Java />} />
          <Route path="/javaeasy" element={<Javaeasy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
