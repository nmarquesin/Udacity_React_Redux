import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setActiveUser } from "../actions/activeUser";
import { useHistory, useLocation } from "react-router-dom";

import styles from "./NavBar.module.scss";

const NavBar = ({ dispatch, loggedUser, users }) => {
  let history = useHistory();

  const click = () => {
    dispatch(setActiveUser(""));
    history.push("/login");
  };

  let location = useLocation();

  return (
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
                <Link to="/">Home</Link>
              </div>
            </li>
            <li>
              <div
                className={
                  location.pathname === "/newquestion"
                    ? styles.tabselected
                    : styles.tab
                }
              >
                <Link to="/newquestion">New Question</Link>
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
                <Link to="/leaderboard">Leader Board</Link>
              </div>
            </li>
          </ul>
        </nav>
        {loggedUser ? (
          <div className={styles.helloarea}>
            <div className={styles.username}>
              Welcome, {users[loggedUser].name}!
            </div>
            <div>
              <button className={styles.btn} onClick={click}>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.navitems}>
            <div
              className={
                location.pathname === "/login" ? styles.tabselected : styles.tab
              }
            >
              <Link to="/login"> Login</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function mapStateToProps({ activeUser, users }) {
  const loggedUser = activeUser.id;
  return { loggedUser, users };
}

export default connect(mapStateToProps)(NavBar);
