import React, { useState } from "react";
import SignUpForm from "../../components/signup-form/signup-form.component";
import LoginForm from "../../components/signin-form/signin-form.component";

const AuthPage = ({ setUser }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <h1>Auth Page</h1>
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Sign Up" : "Sign In"}
      </button>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </div>
  );
};

export default AuthPage;
