import React from "react";
import Navbar from "../../../Atom/Navbar/Navbar";
import TwitterPost from "../../middleContainer/TwitterPost";
import style from "./MiddleContainer.module.css";

function MiddleContainer() {
  return (
    <>
      <div className={style.navbarContainer}>
        <Navbar />
      </div>
      <div className={style.twitterPostContainer}>
        <TwitterPost />
      </div>
    </>
  );
}

export default MiddleContainer;
