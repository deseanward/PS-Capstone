import { useState } from "react";
import * as usersService from "../../utils/users/users-service";

import Input from "../../ui/input/input.ui";
import Button from "../../ui/button/button.ui";
import Form from "../../ui/form/form.ui";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.logIn(credentials);
      setUser(user);
    } catch (err) {
      setError("Log In Failed - Try Again");
      console.log(err);
    }
  }

  return (
    <div onSubmit={handleSubmit} className='flex flex-col items-center'>
      <Form autoComplete='off'>
        <section className='w-full'>
          <label>Email</label>
          <Input
            type='text'
            name='email'
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </section>
        <section className='w-full'>
          <label>Password</label>
          <Input
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </section>
        <Button type='submit'>LOG IN</Button>
      </Form>
      <p className='error-message text-red-500 font-bold'>&nbsp;{error}</p>
    </div>
  );
}
