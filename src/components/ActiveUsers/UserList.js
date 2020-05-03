import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const UserList = ({ users }) => {
  return (
    <table className="user-table">
      <thead className="user-table__categories">
        <tr>
          <th />
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Campaigns</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>Aktiv?</td>
              <td className="user-table__user">
                <Link to={`/user/${user.slug}`}>{user.name}</Link>
              </td>
              <td>{user.email}</td>
              <td>{user.userRole}</td>
              <td>{user.campaign}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};
