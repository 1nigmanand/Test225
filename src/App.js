import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';  // Correct imports
import Main from './components/main';  // Main page component
import RefundAndCancellation from './components/refund';  // Refund and Cancellation page component
import Contact from './components/contact';  // Contact page component
import Terms from './components/terms';  // Terms and Conditions page component

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />  {/* Default route - Homepage */}
          <Route path="/refund-cancellation" element={<RefundAndCancellation />} />  {/* Route for Refund and Cancellation */}
          <Route path="/contact-us" element={<Contact />} />  {/* Route for Contact page */}
          <Route path="/terms-conditions" element={<Terms />} />  {/* Route for Terms and Conditions page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
