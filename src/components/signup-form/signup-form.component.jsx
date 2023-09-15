import React, { useState } from "react";
import { signUp } from "../../utils/users/users-service";

const SignUpForm = ({ setUser }) => {
  const defaultFormFields = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };
  const [formData, setFormData] = useState(defaultFormFields);

  const isDisabled = formData.password !== formData.confirm;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);

      // Make a copy of the form data
      const userFormData = { ...formData };

      // Delete the extra properties
      delete userFormData.confirm;
      delete userFormData.error;

      // Calling user service sign up function
      const user = await signUp(userFormData);
      console.log("USER: ", user);
      setUser(user);
    } catch (error) {
      console.log(error);
      setFormData({ ...formData, error: "Sign Up Failed - Try Again" });
    }
  };

  return (
    <div className='form-container'>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Confirm Password</label>
        <input
          type='password'
          name='confirm'
          value={formData.confirm}
          onChange={handleChange}
          required
        />

        <button type='submit' disabled={isDisabled}>
          Sign Up
        </button>
      </form>
      <p className='error_message'>{formData.error}</p>
    </div>
  );
};

export default SignUpForm;
