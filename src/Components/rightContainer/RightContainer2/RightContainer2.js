import React from "react";

import { Avatar } from "@mui/material";
import style from "./RightContainer2.module.css";
import CustomButton from "../../../Atom/Button/CustomButton";

function Righthomebox2() {
  const followContainer = [
    {
      id: 0,
      tag: <i class="far fa-solid fa-badge-check"></i>,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
      text: "virat",
      text2: "virat@gmail.com",
    },
    {
      id: 0,
      tag: <i class="fa fa-solid fa-badge-check"></i>,
      src: "https://www.cricketsoccer.com/wp-content/uploads/2020/09/i.jpg",
      text: "Rohit",
      text2: "rohits@gmail.com",
    },
    {
      id: 0,
      tag: <i class="fa fa-solid fa-badge-check"></i>,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
      text: "mahi",
      text2: "virat@gmail.com",
    },
    {
      id: 0,
      tag: <i class="fa fa-solid fa-badge-check"></i>,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
      text: "virat",
      text2: "virat@gmail.com",
    },
  ];
  return (
    <div className={style.container}>
      <h1>Who to follow</h1>
      <div className={style.main}>
        {followContainer.map((menu) => {
          return (
            <div className={style.wrapper}>
              <Avatar alt="Remy Sharp" src={menu.src} />
              <div className={style.img}>
                <h3>
                  {menu.text}
                  <span style={{ color: "blue" }}> {menu.tag} </span>
                </h3>
                <h6>{menu.text2}</h6>
              </div>
              <div className={style.btntxt}>
                <CustomButton
                  buttonText="Follow"
                  customCss={style.follwButton}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Righthomebox2;
