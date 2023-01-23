import React from "react";
import { useState } from "react";
import style from "./Trends.module.css";
import CustomButton from "../../../Atom/Button/CustomButton";
import Dialog2 from "../../Dialog2/DialogBox2";

const Trends = () => {
  const [open, setOpen] = useState(false);
  const handleclickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };

  const [state, setState] = useState([
    {
      id: 1,
      country: "Trending in Election",
      keyword: "#Modi",
      totalKeywords: "8000k Tweets",
      isNotIntrested: false,
    },
    {
      id: 2,
      country: "Trending in India",
      keyword: "#Virat kohli",
      totalKeywords: "6000k Tweets",
      isNotIntrested: false,
    },
    {
      id: 3,
      country: "Trending in Sports",
      keyword: "#RohitSharma",
      totalKeywords: "2560k Tweets",
      isNotIntrested: false,
    },
    {
      id: 4,
      country: "Trending in Sports",
      keyword: "#ViratKohli",
      totalKeywords: "2000k Tweets",
      isNotIntrested: false,
    },
    {
      id: 5,
      country: "Trending in Sports",
      keyword: "#sachin",
      totalKeywords: "2000k Tweets",
      isNotIntrested: false,
    },
    {
      id: 6,
      country: "Trending in Bollywood",
      keyword: "#kartik",
      totalKeywords: "20000k Tweets",
      isNotIntrested: false,
    },
  ]);
  return (
    <div className={style.keywords}>
      <div className={style.key}>
        <div className={style.keyword__heading}>
          <h4 className={style.heading4}>What's happening</h4>
        </div>
        {state.map((keyword) => (
          <div className={style.container}>
            <div key={keyword.id}>
              <div className={style.country}>{keyword.country}</div>
              <div className={style.keyword__name}>
                <strong>{keyword.keyword}</strong>
              </div>
              <div className={style.keyword__tweets}>
                {keyword.totalKeywords}
              </div>
            </div>
            <div className={style.btn}>
              <CustomButton
                buttonText="..."
                btnNext={handleclickOpen}
                customCss={style.btn1}
              />

              <Dialog2 open={open} onClose={handleClickClose} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trends;
