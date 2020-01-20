import React from "react";
import PropTypes from "prop-types";
import { Store } from "../../store";
import { firebaseOps } from "../../utils";
import { ConstantsConfig } from "../../config";

const RootLayout = ({ children }) => {
  let state = Store.useStore();
  let keyName = ConstantsConfig.STATE_KEYS.CHALLENGE;
  if (!state.get(keyName)) {
    firebaseOps
      .getAllChallenges()
      .then(challenge => state.set(keyName)(challenge));
  }

  return <div>{children}</div>;
};

RootLayout.propTypes = {
  children: PropTypes.any
};

export default RootLayout;
