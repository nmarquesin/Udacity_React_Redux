import React from "react";

import styles from "./Avatar.module.scss";

const Avatar = (props) => {
  const { id } = props;
  return <div className={styles[id]}></div>;
};

export default Avatar;
