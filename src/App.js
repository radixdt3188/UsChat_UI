import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UCFooter from "./layouts/FooterSection/UC_Footer.jsx";
import UCHeader from "./layouts/HeaderSection/UC_Header.jsx";
import Dashboard from "./layouts/Dashboard/Dashboard.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <UCHeader />

        <main className="layout">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer Section */}
        <UCFooter />
      </div>
    </Router>
  );
}

export default App;
