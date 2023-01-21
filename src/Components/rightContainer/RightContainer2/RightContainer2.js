import React, { useState } from "react";

import { Avatar } from "@mui/material";
import style from "./RightContainer2.module.css";
import CustomButton from "../../../Atom/Button/CustomButton";

function Righthomebox2() {
  const handleClick = (id) => {
    const updatedFollowContainer = followContainer.map((item) => {
      if (item.id === id) {
        item.followed = !item.followed;
      }
      return item;
    });
    setFollowContainer(updatedFollowContainer);
  };
  const [followContainer, setFollowContainer] = useState([
    {
      id: 1,
      tag: <i class="far fa-solid fa-badge-check"></i>,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
      text: "virat",
      text2: "virat@gmail.com",
    },
    {
      id: 2,
      tag: <i class="fa fa-solid fa-badge-check"></i>,
      src: "https://www.cricketsoccer.com/wp-content/uploads/2020/09/i.jpg",
      text: "Rohit",
      text2: "rohits@gmail.com",
    },
    {
      id: 3,
      tag: <i class="fa fa-solid fa-badge-check"></i>,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
      text: "mahi",
      text2: "virat@gmail.com",
    },
    {
      id: 4,
      tag: <i class="fa fa-solid fa-badge-check"></i>,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
      text: "virat",
      text2: "virat@gmail.com",
    },
  ]);
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
                  buttonText={menu.followed ? "Followed" : "Follow"}
                  btnNext={() => handleClick(menu.id)}
                  key={menu.id}
                  customCss={style.follwButton}
                  disabled={menu.followed}
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
