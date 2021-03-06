import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as userActions from "../../redux/actions/userActions";
import * as campaignActions from "../../redux/actions/campaignActions";
// import * as apiStatusAction from "."
import PropTypes from "prop-types";
import { Spinner } from "../common/Spinner";
import { UserList } from "./UserList";
import { Heading, ButtonContainer, Button } from "../../style/_common";
import { ActiveUsersWr } from "./_style";

const ActiveUsers = ({
  users,
  campaigns,
  loadUsers,
  loadCampaigns,
  loading,
}) => {
  //: TODO, use props.history for routing
  useEffect(() => {
    // TODO: set up a better if statement, what if new users are added they need to be loaded
    if (users.length === 0) {
      loadUsers().catch((error) => {
        // TODO: make a customer Friendly UI -> display error message "sorry, unable to find/get user for you! Try again!"
        Console.log(`LOADING USERS FAILED: ${error}`);
      });
    }
    if (campaigns.length === 0) {
      loadCampaigns().catch((error) => {
        console.log(`Not ablet to load campaigns: ${error}`);
      });
    }

    return () => {
      console.log("ActiveUsers unmounted");
    };
  }, []);

  return (
    <ActiveUsersWr>
      <Heading>Aktive Brukere</Heading>
      <ButtonContainer>
        <Button>Legg til ny bruker</Button>
      </ButtonContainer>

      {campaigns.length && users.length ? (
        <UserList users={users} />
      ) : (
        <Spinner />
      )}
    </ActiveUsersWr>
  );
};
// TODO: check if both api calls end when loading users page

ActiveUsers.propTypes = {
  users: PropTypes.array.isRequired,
  campaigns: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  console.log(state);
  return {
    users:
      state.campaigns.length === 0
        ? []
        : state.users.map((user) => {
            return {
              ...user,
              campaigns: state.campaigns.find((c) => c.id === user.campaigns)
                .name,
            };
          }),
    campaigns: state.campaigns,
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  loadUsers: userActions.loadUsers,
  loadCampaigns: campaignActions.loadCampaigns,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveUsers);
