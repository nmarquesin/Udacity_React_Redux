import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setActiveUser } from "../actions/activeUser";
import { useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import styles from "./NavBar.module.scss";

const NavBar = ({ dispatch, loggedUser, users }) => {
  let history = useHistory();
  const click = () => {
    dispatch(setActiveUser(""));
    history.push("/login");
  };
  let location = useLocation();
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <nav className={styles.navitems}>
            <ul>
              <li>
                <div
                  className={
                    location.pathname === "/" ? styles.tabselected : styles.tab
                  }
                >
                  <Link to="/">
                    <FontAwesomeIcon icon={faHome} />
                    <span className={styles["menu-text"]}> Home</span>
                  </Link>
                </div>
              </li>
              <li>
                <div
                  className={
                    location.pathname === "/add"
                      ? styles.tabselected
                      : styles.tab
                  }
                >
                  <Link to="/add">
                    <FontAwesomeIcon icon={faPlusSquare} />
                    <span className={styles["menu-text"]}> New Question</span>
                  </Link>
                </div>
              </li>
              <li>
                <div
                  className={
                    location.pathname === "/leaderboard"
                      ? styles.tabselected
                      : styles.tab
                  }
                >
                  <Link to="/leaderboard">
                    <FontAwesomeIcon icon={faTrophy} />
                    <span className={styles["menu-text"]}> Leader Board</span>
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
          {loggedUser ? (
            <div className={styles.helloarea}>
              <div className={styles["username-desktop"]}>
                <div className={styles.username}>
                  Welcome, {users[loggedUser].name}!
                </div>
              </div>
              <div>
                <button className={styles.btn} onClick={click}>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  <span className={styles["menu-text"]}> Logout </span>
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.navitems}>
              <div
                className={
                  location.pathname === "/login"
                    ? styles.tabselected
                    : styles.tab
                }
              >
                <Link to="/login"> Login</Link>
              </div>
            </div>
          )}
        </div>
      </div>
      {loggedUser ? (
        <div className={styles["username-mobile"]}>
          <div className={styles.username}>
            Welcome, {users[loggedUser].name}!
          </div>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

function mapStateToProps({ activeUser, users }) {
  const loggedUser = activeUser.id;
  return { loggedUser, users };
}

export default connect(mapStateToProps)(NavBar);
