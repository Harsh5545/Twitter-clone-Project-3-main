import React from "react";

import { Avatar } from "@mui/material";
import style from "./RightContainer2.module.css";
import CustomButton from "../../../Atom/Button/CustomButton";

function Righthomebox2() {
  const followContainer = [
    {
      id: 0,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
      text: "virat",
      text2: "virat@gmail.com",
    },
    {
      id: 0,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
      text: "Pavan",
      text2: "pavan@gmail.com",
    },
    {
      id: 0,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_oz7crwHtUQj0jJuvLq-ILk5oikP_3FFL-mDJqk&s",
      text: "virat",
      text2: "virat@gmail.com",
    },
    {
      id: 0,
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
            <>
              <div>
                <div className={style.wrapper}>
                  <Avatar alt="Remy Sharp" src={menu.src} />
                  <div className={style.img}>
                    <h3>{menu.text}</h3>
                    <h6>{menu.text2}</h6>
                  </div>
                  <div className={style.btntxt}>
                    <CustomButton
                      buttonText="Follow"
                      customCss={style.follwButton}
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Righthomebox2;
