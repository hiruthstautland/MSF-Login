import React, { useEffect } from "react";
import { checkLogin } from "../../util/loginValidation";

export const Authenticate = ({ history }) => {
  useEffect(() => {
    async () => {
      const isAuthenticated = await checkLogin();
      console.log(isAuthenticated);

      if (!isAuthenticated) {
        history.replace("/login");
      } else {
        history.replace("/home");
      }
    };
  });

  return <div>YOU ARE IN</div>;
};
