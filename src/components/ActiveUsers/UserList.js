import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { UserTable, UserTableHeading, UserTableTd } from "./_style";

export const UserList = ({ users }) => {
  return (
    <UserTable>
      <UserTableHeading>
        <tr>
          <th>Online</th>
          <th>Name</th>
          <th>Gruppe</th>
          <th>Role</th>
          <th>Campaigns</th>
        </tr>
      </UserTableHeading>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <UserTableTd> -/+ </UserTableTd>
              <UserTableTd>
                <Link to={`/user/${user.slug}`}>{user.name}</Link>
              </UserTableTd>
              <UserTableTd>{user.team}</UserTableTd>
              <UserTableTd>{user.userRole}</UserTableTd>
              <UserTableTd>{user.campaigns}</UserTableTd>
            </tr>
          );
        })}
      </tbody>
    </UserTable>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};
