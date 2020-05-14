import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import * as userActions from "../../../redux/actions/userActions";

import { Form } from "./Form";

export const LoginForm = ({ users, loadUsers }) => {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  //   const [onSelectSuggestion, setOnSelectSuggestion] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // TODO: set up a better if statement, what if new users are added they need to be loaded
    if (users.length === 0) {
      loadUsers().catch((error) => {
        // TODO: make a customer Friendly UI -> display error message "sorry, unable to find/get user for you! Try again!"
        Console.log(`LOADING USERS FAILED: ${error}`);
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name } = e.target;

    console.log(e.target);
    name === "name"
      ? setUserInput(e.target.value)
      : setPassword(e.target.value);
  };

  return (
    <Form
      loggedIn={loggedIn}
      userInput={userInput}
      handleChange={handleChange}
      password={password}
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
