import React from "react";
import { connect } from "react-redux";
import * as userActions from "../../redux/actions/userActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class ActiveUsers extends React.Component {
  componentDidMount() {
    this.props.actions.loadUsers().catch((error) => {
      // TODO: make a customer Friendly UI -> display error message "sorry, unable to find/get user for you! Try again!"
      console.log("LOADING USERS FAILED", error);
      alert(`LOADING USERS FAILED: ${error}`);
    });
  }

  render() {
    console.log(this.props.users);
    return (
      <>
        Hello
        {this.props.users.map((user) => {
          <div key={user.name}>{user.name}</div>;
        })}
      </>
    );
  }
}

ActiveUsers.propTypes = {
  actions: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveUsers);
