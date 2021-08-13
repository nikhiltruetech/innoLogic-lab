import React, { useState } from "react";
import LoginForm from "./Components/LoginForm/LoginForm";
import Header from "./Layout/Header/Header";

let showLoginContext = React.createContext(null);
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <showLoginContext.Provider value={(showLogin, setShowLogin)}>
        <Header
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
        />
        {showLogin ? (
          <LoginForm
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            showLogin={showLogin}
            setShowLogin={setShowLogin}
          />
        ) : (
          <div className="text-center p-5">
            <h2>Please Click on Login button !</h2>
          </div>
        )}
      </showLoginContext.Provider>
    </div>
  );
};

export default App;
