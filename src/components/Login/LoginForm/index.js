import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as userActions from "../../../redux/actions/userActions";
import { validateLogin } from "../../../util/loginValidation";
import { Form } from "./Form";

export const LoginForm = ({ users, loadUsers, history }) => {
  const [userInput, setUserInput] = useState("");
  const [secret, setSecret] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  //   const [onSelectSuggestion, setOnSelectSuggestion] = useState("");
  //   const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // TODO: set up a better if statement, what if new users are added they need to be loaded
    if (users.length === 0) {
      loadUsers().catch((error) => {
        // TODO: make a customer Friendly UI -> display error message "sorry, unable to find/get user for you! Try again!"
        console.log(`LOADING USERS FAILED: ${error}`);
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name } = e.target;
    name === "name" ? setUserInput(e.target.value) : setSecret(e.target.value);
  };

  const handleLoginAttempt = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const { token, error } = await validateLogin({ userInput, secret });
      console.log("token-------", token);
      if (secret.length < 0) {
        throw new Error("Please provide password");
      }
      if (error) {
        throw new Error(error);
      }
      if (!token) {
        throw new Error("No password provided");
      }
      localStorage.setItem("token", token);
      history.push("/");
    } catch (error) {
      setError(error);
      setLoggedIn(false);
    }
  };

  return (
    <Form
      userInput={userInput}
      handleChange={handleChange}
      password={secret}
      handleLoginAttempt={handleLoginAttempt}
      error={error}
    />
  );
};

LoginForm.propTypes = {
  users: PropTypes.array.isRequired,
  loadUsers: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

const mapDispatchToProps = {
  loadUsers: userActions.loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
