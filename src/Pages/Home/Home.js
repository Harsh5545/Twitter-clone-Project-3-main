import React from "react";
import MenuItems from "../../Components/Sections/Left/MenuItems";
import style from "./Home.module.css";
import { FaTwitter } from "react-icons/fa";
import { Dialog } from "@mui/material";
import RightSide from "../../Components/Sections/Right/RightSide";

function Home() {
  return (
    <div className={style.Main}>
      <div className={style.container}>
        <MenuItems />
      </div>
      <div className={style.middleContainer}></div>
      <div className={style.rightContainer}>
        <RightSide />
      </div>
    </div>
  );
}

export default Home;
