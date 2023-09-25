import React, { useState } from "react";
import { signUp } from "../../utils/users/users-service";
import { setAuth } from "../../app/features/auth/authSlice";
import Form from "../../ui/form/form.ui";
import Input from "../../ui/input/input.ui";
import Button from "../../ui/button/button.ui";
import { useDispatch } from "react-redux";

const SignUpForm = ({ setUser }) => {
  const defaultFormFields = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };
  const [formData, setFormData] = useState(defaultFormFields);
  const dispatch = useDispatch();

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
      // Make a copy of the form data
      const userFormData = { ...formData };

      // Delete the extra properties
      delete userFormData.confirm;
      delete userFormData.error;

      // Calling user service sign up function
      const user = await signUp(userFormData);
      dispatch(setAuth(user));
    } catch (error) {
      console.log(error);
      setFormData({ ...formData, error: "Sign Up Failed - Try Again" });
    }
  };

  return (
    <div onSubmit={handleSubmit}>
      <Form autoComplete='off'>
        <section className='w-full'>
          <label>Name</label>
          <Input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </section>
        <section className='w-full'>
          <label>Email</label>
          <Input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </section>
        <section className='w-full'>
          <label>Password</label>
          <Input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </section>
        <section className='w-full'>
          <label>Confirm Password</label>
          <Input
            type='password'
            name='confirm'
            value={formData.confirm}
            onChange={handleChange}
            required
          />
        </section>
        <Button type='submit' disabled={isDisabled}>
          Sign Up
        </Button>
      </Form>
      <p className='error_message'>{formData.error}</p>
    </div>
  );
};

export default SignUpForm;
