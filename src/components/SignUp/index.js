import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as userActions from "../../redux/actions/userActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class SignUp extends React.Component {
  state = {
    user: {
      name: "",
      email: "",
      userRole: "",
    },
  };

  handleInputChange = (e) => {
    const user = {
      ...this.state.user,
      name: e.target.value,
    };

    this.setState({
      user,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.actions.createUser(this.state.user);
    this.state.user.name = "";
  };

  render() {
    const styleFieldset = {
      border: "1px dotted green",
      display: "flex",
      flexFlow: "row no-wrap",
      justifyContent: "center",
    };
    return (
      <form
        onSubmit={this.handleFormSubmit}
        className="sigin-form"
        autoComplete="on"
      >
        {" "}
        <fieldset style={styleFieldset}>
          <legend>
            <h2>Ny Bruker</h2>
          </legend>
          <label htmlFor="name">
            Navn
            <input
              id="name"
              type="text"
              onChange={this.handleInputChange}
              value={this.state.user.name}
            />
          </label>
          <br />
          {/* TODO: re-add */}
          {/* <label htmlFor="email">
            Email{" "}
            <input
              id="email"
              type="email"
              value={this.state.user.email}
            />
          </label>
          <hr />
          <label htmlFor="userRole">
            <input type="checkbox" />
            Admin
          </label>
          <label htmlFor="userRole">
            <input type="checkbox" />
            MSF-medarbeider
          </label>
          <label htmlFor="userRole">
            <input type="checkbox" />
            Gjest
          </label> */}
          <button htmlFor="form" type="submit">
            Legg til bruker
          </button>
          <Link to="/">
            <button type="button">Tilbake</button>
          </Link>
        </fieldset>
        {this.props.users.map((user) => {
          <div key={user.name}>{user.name}</div>;
        })}
      </form>
    );
  }
}

// SignUp.propTypes = {
//   users: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired,
// };

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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
