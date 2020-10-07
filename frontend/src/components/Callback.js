import React, { useEffect } from "react";
import auth0Client from "../utils/Auth";
import { navigate } from "@reach/router";

const Callback = () => {
  useEffect(() => {
    (async function handleAuth() {
      await auth0Client.handleAuthentication();
    })();
    navigate("/");
  });

  return <p>Loading profile...</p>;
};

export default Callback;
