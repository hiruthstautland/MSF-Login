import React from " react";

class UserPage extends React.Components {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: ""
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const user = { ...this.state.user, name: e.target.value };
    this.setState({
      user
    });
  }

  render() {
    return (
      <form>
        <h2>Users</h2>
        <h3>Add User</h3>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.user.name}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default UserPage;
