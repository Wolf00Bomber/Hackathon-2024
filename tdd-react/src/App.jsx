import React, { useState } from "react";
import Login from "./components/login";

const App = () => {

  const [showLoginComponent, setShowLoginComponent] = useState(false);
  
  const handleContinueWithLoginClick = () => {
    setShowLoginComponent(prev => true)
  }

  return (
    <div>
      <span data-testid="app-span-id">Test Span Here</span>
      <button className="btn-login" onClick={handleContinueWithLoginClick}>Continue with Login</button>
      {
        showLoginComponent && (
          <Login></Login>
        )
      }
    </div>
  );
}

export default App;
