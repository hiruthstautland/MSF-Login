import React from "react";
import { Link } from "react-router-dom";

export const Login = () => (
  <div className='Login'>
    <form className='login-form' autoComplete='on'>
      <fieldset>
        <legend>
          <h2>Login</h2>
        </legend>
        <label htmlFor='name'>
          Navn
          <input id='username' type='text' />
        </label>
        <Link to='landingpage'>
          <button type='button'>Logg inn</button>
        </Link>
        <Link to='/'>
          <button type='button'>Tilbake</button>
        </Link>
      </fieldset>
    </form>
  </div>
);
