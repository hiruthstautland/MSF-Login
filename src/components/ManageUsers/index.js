import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as userActions from "../../redux/actions/userActions";
import * as campaignActions from "../../redux/actions/campaignActions";
import { Heading } from "../../style/components/common";
import { ManageUsersForm } from "./ManageUsersForm";
import { newUser } from "../../../mockApi/mockData";

const ManageUsers = ({
  users,
  campaigns,
  loadUsers,
  loadCampaigns,
  ...props
  // user: initUSer
}) => {
  const [user, setUser] = useState({ ...props.user });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // TODO: set up a better if statement, what if new users are added they need to be loaded

    if (users.length === 0) {
      loadUsers().catch((error) => {
        // TODO: make a customer Friendly UI -> display error message "sorry, unable to find/get user for you! Try again!"
        console.log(`LOADING USERS FAILED: ${error}`);
      });
    }
    if (campaigns.length === 0) {
      loadCampaigns().catch((error) => {
        console.log(`Not ablet to load campaigns: ${error}`);
      });
    }
  }, []);

  return (
    <>
      <Heading>Administrer Brukere</Heading>
      <ManageUsersForm user={user} errors={errors} campaigns={campaigns} />
    </>
  );
};

ManageUsers.propTypes = {
  user: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  campaigns: PropTypes.array.isRequired,
  loadUsers: PropTypes.func.isRequired,
  loadCampaigns: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    user: newUser,
    users: state.users,
    campaigns: state.campaigns,
  };
}

const mapDispatchToProps = {
  loadUsers: userActions.loadUsers,
  loadCampaigns: campaignActions.loadCampaigns,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers);
