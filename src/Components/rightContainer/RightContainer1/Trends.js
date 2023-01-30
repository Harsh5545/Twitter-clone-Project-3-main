import React from "react";
import { useState } from "react";
import style from "./Trends.module.css";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Dialog2 from "../../Dialog2/DialogBox2";
// import { DataArrayRounded } from "@mui/icons-material";

const Trends = () => {
  const [isNotIntrested, setIsNotIntrested] = useState([
    {
      id: 1,
      isNotIntrested: false,
      country: "Trending in Sports",
      keyword: "Rohit Sharma",
      totalKeywords: "8000k Tweets",
    },
    {
      id: 2,
      isNotIntrested: false,
      country: "Trending in India",
      keyword: "#Virat kohli",
      totalKeywords: "6000k Tweets",
    },
    {
      id: 3,
      isNotIntrested: false,
      country: "Trending in Sports",
      keyword: "#Hardik Pandya",
      totalKeywords: "2560k Tweets",
    },
    {
      id: 4,
      isNotIntrested: false,
      country: "Trending in Bollywood",
      keyword: "#RRR",
      totalKeywords: "2000k Tweets",
    },
    {
      id: 5,
      isNotIntrested: false,
      country: "Trending in Sports",
      keyword: "#sachin",
      totalKeywords: "2000k Tweets",
    },
  ]);
  const [selectedId, setSelectedId] = useState(null);
  const updateId = (id) => setSelectedId(id);
  const HandleClick = () => {
    const tempArr = [];

    isNotIntrested.forEach((x) => {
      if (x.id !== selectedId) {
        tempArr.push(x);
      }
    });

    console.log("temp arr ", tempArr);
    setIsNotIntrested(tempArr);
  };

  return (
    <div className={style.keywords}>
      <div className={style.key}>
        <div className={style.keyword__heading}>
          <h4 className={style.heading4}>What's happening</h4>
        </div>
        {isNotIntrested.map((keyword) => {
          return (
            <div
              key={keyword.id}
              className={style.container}
              onClick={() => {
                updateId(keyword.id);
              }}
            >
              <div>
                <div className={style.country}>{keyword.country}</div>
                <div className={style.keyword__name}>
                  <strong>{keyword.keyword}</strong>
                </div>
                <div className={style.keyword__tweets}>
                  {keyword.totalKeywords}
                </div>
              </div>
              <div className={style.btn}>
                <Dialog2
                  onClick={HandleClick}
                  title={
                    <div>
                      <SentimentVeryDissatisfiedIcon /> This trend is harmful or
                      spammy
                    </div>
                  }
                  content={
                    <p>
                      <SentimentVeryDissatisfiedIcon />
                      Is not Intrested
                    </p>
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trends;
