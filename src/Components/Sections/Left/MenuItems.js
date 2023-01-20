import React from "react";
import { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaHouseUser, FaHashtag, FaNotification } from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import { BsBookmark, BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { TbFileText } from "react-icons/tb";
import { CgMoreO } from "react-icons/cg";
import CustomButton from "../../../Atom/CustomButton/CustomButton";
import Tweet from "../../../Atom/Tweet/Tweet";
import style from "./MenuItem.module.css";
import Dialog from "@mui/material/Dialog";
import { IoMdNotifications } from "react-icons/io";
import { Avatar } from "@mui/material";
import CustomButton2 from "../../../Atom/CustomButton/CustomButton2";
// import User from "./User";

function LeftSec() {
  const menu = [
    { id: 0, icon: <FaTwitter /> },
    { id: 1, icon: <FaHouseUser />, Name: "Home" },
    { id: 2, icon: <FaHashtag />, Name: "Explore" },
    { id: 3, icon: <IoMdNotifications />, Name: "Notifications" },
    { id: 4, icon: <HiOutlineMail />, Name: "Message" },
    { id: 5, icon: <BsBookmark />, Name: "Bookmarks" },
    { id: 6, icon: <TbFileText />, Name: "Lists" },
    { id: 7, icon: <BsPerson />, Name: "Profile" },
    { id: 8, icon: <CgMoreO />, Name: "More" },
  ];
  const [isOpen, SetisOpen] = useState(false);
  const handleClickOpen = () => {
    SetisOpen(true);
  };
  const handleClose = () => {
    SetisOpen(false);
  };
  return (
    <>
      <div>
        {menu.map((menu) => {
          return (
            <>
              <div className={style.sidebar}>
                <div className={style.sidebarOption} key={menu.id}>
                  <h2>{menu.icon}</h2>
                  <span>{menu.Name}</span>
                </div>
              </div>
            </>
          );
        })}
        <CustomButton
          buttonText="Tweet"
          customCss={style.sidebar__tweet}
          btnNext={handleClickOpen}
        />

        <Dialog open={isOpen} onClose={handleClose}>
          <Tweet />
        </Dialog>
      </div>
      <CustomButton2
        picture={<Avatar alt="Remy Sharp" src="" />}
        text={"Rishab Gupta"}
        text2={"rishabgupta@gmail.com"}
      />
    </>
  );
}
export default LeftSec;
