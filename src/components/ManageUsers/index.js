import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as userActions from "../../redux/actions/userActions";
import * as campaignActions from "../../redux/actions/campaignActions";
import { ManageUsersForm } from "./ManageUsersForm";
import { newUser } from "../../../mockApi/mockData";
import { Spinner } from "../common/Spinner";

const ManageUsers = ({
  users,
  campaigns,
  saveUser,
  loadUsers,
  loadCampaigns,
  history,
  ...props
}) => {
  const [user, setUser] = useState({ ...props.user });
  const [errors, setErrors] = useState({});
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    // TODO: set up a better if statement, what if new users are added they need to be loaded
    if (users.length === 0) {
      loadUsers().catch((error) => {
        // TODO: make a customer Friendly UI -> display error message "sorry, unable to find/get user for you! Try again!"
        console.log(`LOADING USERS FAILED: ${error}`);
      });
    } else {
      setUser({ ...props.user });
    }
    if (campaigns.length === 0) {
      loadCampaigns().catch((error) => {
        console.log(`Not ablet to load campaigns: ${error}`);
      });
    }
    return () => {
      setUser({});
    };
  }, [props.user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]:
        name === "campaigns" && value.length > 2
          ? setShowSuggestions(true)
          : value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await saveUser(user);
    return history.push("/users");
  };

  return campaigns.length === 0 || users.length === 0 ? (
    <Spinner />
  ) : (
    <ManageUsersForm
      user={user}
      errors={errors}
      campaigns={campaigns}
      onSave={handleSave}
      onChange={handleChange}
      showSuggestions={showSuggestions}
    />
  );
};

ManageUsers.propTypes = {
  user: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  campaigns: PropTypes.array.isRequired,
  loadUsers: PropTypes.func.isRequired,
  saveUser: PropTypes.func.isRequired,
  loadCampaigns: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

//TODO: check filter
const getUserBySlug = (users, slug) => {
  return users.find((user) => user.slug === slug) || null;
};

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const user =
    slug && state.users.length > 0 ? getUserBySlug(state.users, slug) : newUser;
  return {
    user,
    users: state.users,
    campaigns: state.campaigns,
  };
}

const mapDispatchToProps = {
  loadUsers: userActions.loadUsers,
  saveUser: userActions.saveUser,
  loadCampaigns: campaignActions.loadCampaigns,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers);
