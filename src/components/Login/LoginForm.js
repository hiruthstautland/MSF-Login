import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import * as userActions from "../../redux/actions/userActions";
import * as campaignActions from "../../redux/actions/campaignActions";

import { Button, Heading, ButtonContainer } from "../../style/_common";
import { LoginFormWr } from "./_style";
import { TextInput } from "../common/TextInput";
import { AutocompleteList } from "../common/AutoCompleteList";

export const LoginForm = ({ users, campaigns, loadUsers }) => {
  const [showForm, setShowForm] = useState(false);
  const [suggestion, setSuggestion] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const [onSelectSuggestion, setOnSelectSuggestion] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // TODO: set up a better if statement, what if new users are added they need to be loaded
    if (users.length === 0) {
      loadUsers().catch((error) => {
        // TODO: make a customer Friendly UI -> display error message "sorry, unable to find/get user for you! Try again!"
        console.log(`LOADING USERS FAILED: ${error}`);
      });
    }
  }, []);

  const onChange = (e) => {
    const { name } = e.target;
    name === "name"
      ? setUserInput(e.target.value)
      : setPassword(e.target.value);
  };

  return (
    <LoginFormWr>
      <form>
        <fieldset>
          <legend>
            <Heading>Login</Heading>
          </legend>
          <TextInput
            name="name"
            label="Navn"
            placeholder=""
            value={userInput}
            onChange={onChange}
            // error={errors.title}
          />
          <TextInput
            name="password"
            label="Passord"
            placeholder=""
            type="password"
            value={password}
            onChange={onChange}
            // error={errors.title}
          />
          <ButtonContainer>
            <Link to="admin">
              <Button type="button">Logg inn</Button>
            </Link>
            {showForm && (
              <AutocompleteList
                suggestion={suggestion}
                suggestions={suggestions}
                userInput={userInput}
                onSelectSuggestion={onSelectSuggestion}
              />
            )}
          </ButtonContainer>
        </fieldset>
      </form>
    </LoginFormWr>
  );
};

LoginForm.propTypes = {
  users: PropTypes.array.isRequired,
  loadUsers: PropTypes.func.isRequired,
  campaigns: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    users: state.users,
    campaigns: state.campaigns,
  };
}

const mapDispatchToProps = {
  loadUsers: userActions.loadUsers,
  loadCampaigns: campaignActions.loadCampaigns,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
