import React from "react";

import styles from "./Page404.module.scss";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles["card-title"]}>
          Oops! Something went wrong...
        </div>
        <div className={styles["card-body"]}>
          We can't seem to find the question you are looking for
        </div>
        <Link to="/">
          <button className={styles.btn}>Return Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Page404;
