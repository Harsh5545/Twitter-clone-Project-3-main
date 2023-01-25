import React from "react";
import MenuItems from "../../Components/Sections/Left/MenuItems";
import RightSide from "../../Components/Sections/Right/RightSide";
import { useNavigate } from "react-router-dom";
import style from "./Profile.module.css";
import ProfileNavbar from "../../Components/ProfileContainer/ProfileNavbar/ProfileNavbar";
import Userprofile from "../../Components/ProfileContainer/Profile/UserProfile";
function Profile() {
  return (
    <div className={style.Main}>
      <div className={style.container}>
        <MenuItems />
      </div>
      <div className={style.middleContainer}>
        <Userprofile />
      </div>
      <div className={style.rightContainer}>
        <RightSide />
      </div>
    </div>
  );
}

export default Profile;
