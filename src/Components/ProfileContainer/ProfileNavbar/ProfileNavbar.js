import React from "react";
import style from "./ProfileNavbar.module.css";
import WestIcon from '@mui/icons-material/West';
function ProfileNavbar() {
  return (
    <>
      <div className={style.feed__header}>
        <WestIcon />
        <h2>Harshad Kajale</h2>
      </div>
    </>
  );
}
export default ProfileNavbar;
