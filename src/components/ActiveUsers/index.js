import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../redux/actions/userActions";
import * as campaignActions from "../../redux/actions/campaignActions";
import { UserList } from "./UserList";

class ActiveUsers extends React.Component {
  componentDidMount() {
    const { users, campaigns, actions } = this.props;
    // if (users.length === 0) {
    actions.loadUsers().catch((error) => {
      // TODO: make a customer Friendly UI -> display error message "sorry, unable to find/get user for you! Try again!"
      alert(`LOADING USERS FAILED: ${error}`);
    });
    // }
    // if (campaigns.length === 0) {
    actions.loadCampaigns().catch((error) => {
      alert(`Not ablet to load campaigns: ${error}`);
    });
    // }
  }

  render() {
    console.log(this.props);
    return (
      <>
        {/* {this.props.users.map((user) => {
          <div key={user.name}>{user.name}</div>;
        })} */}
        <UserList users={this.props.users} />
      </>
    );
  }
}

ActiveUsers.propTypes = {
  actions: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  campaigns: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    users:
      state.campaigns.length === 0
        ? []
        : state.users.map((user) => {
            return {
              ...user,
              campaign: state.campaigns.find((c) => c.id === user.campaigns)
                .name,
            };
          }),
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadUsers: bindActionCreators(userActions.loadUsers, dispatch),
      loadCampaigns: bindActionCreators(
        campaignActions.loadCampaigns,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveUsers);
