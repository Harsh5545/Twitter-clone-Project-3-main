import React from "react";
import { useState } from "react";
import style from "./Trends.module.css";
const Trends = () => {
  const [state, setState] = useState([
    {
      id: 1,
      country: "Trending in India",
      keyword: "#Ms Dhoni",
      totalKeywords: "2000k",
    },
    {
      id: 2,
      country: "Trending in India",
      keyword: "#Virat kohli",
      totalKeywords: "6000k",
    },
    {
      id: 3,
      country: "Trending in India",
      keyword: "#YoutubeinIndia",
      totalKeywords: "2560k",
    },
  ]);
  return (
    <div className={style.keywords}>
      <div className={style.key}>
        <div className={style.keyword__heading}>
          <h4 className={style.heading4}>What's Happening</h4>
        </div>
        {state.map((keyword) => (
          <div key={keyword.id}>
            <div className={style.country}>{keyword.country}</div>
            <div className={style.keyword__name}>
              <strong>{keyword.keyword}</strong>
            </div>
            <div className={style.keyword__tweets}>{keyword.totalKeywords}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trends;
