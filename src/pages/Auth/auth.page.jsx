import React, { useState } from "react";
import SignUpForm from "../../components/signup-form/signup-form.component";
import LoginForm from "../../components/signin-form/signin-form.component";
import { AuthPageContainer } from "./auth.styles";

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <AuthPageContainer>
      <section className='flex flex-col items-center lg:mr-8 text-slate-900'>
        <h1>Holla!</h1>
        <span className='mb-4'>
          Where The Professionally Like-Minded Mingle
        </span>
        <button
          className='mb-2 hover:text-gray-500'
          onClick={() => setShowLogin(!showLogin)}
        >
          {showLogin ? "Not a user?  Sign Up" : "Already a user? Sign In"}
        </button>
      </section>

      <section className='self-start lg:self-center'>
        {showLogin ? <LoginForm /> : <SignUpForm />}
      </section>
    </AuthPageContainer>
  );
};

export default AuthPage;
