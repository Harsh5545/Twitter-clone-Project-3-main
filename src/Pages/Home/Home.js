import React, { useEffect } from "react";
import MenuItems from "../../Components/Sections/Left/MenuItems";
import style from "./Home.module.css";
import { useRecoilValue } from "recoil";
import RightSide from "../../Components/Sections/Right/RightSide";
import MiddleContainer from "../../Components/Sections/Middle/MiddleContainer";
import { isLoginAtom } from "../../Recoil/Atom1/Atom";
import { useNavigate } from "react-router-dom";
import { isTweetSelected } from "../../Recoil/Atom1/Atom";
import SelectedTweet from "../../TweetData/SelectedTweet";

function Home() {
  const isUserLoggedIn = useRecoilValue(isLoginAtom);
  const nevigate = useNavigate();
  const isTweetSelect = useRecoilValue(isTweetSelected);
  useEffect(() => {
    if (!isUserLoggedIn) {
      nevigate("/Login");
    }
  });

  return (
    <div className={style.Main}>
      <div className={style.container}>
        <MenuItems />
      </div>
      <div className={style.middleContainer}>
        {isTweetSelect ? <SelectedTweet /> : <MiddleContainer />}
      </div>
      <div className={style.rightContainer}>
        <RightSide />
      </div>
    </div>
  );
}

export default Home;
