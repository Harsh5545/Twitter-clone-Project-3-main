import React, { useState } from "react";
import { GoVerified } from "react-icons/go";
import style from "./TwitterPost.module.css";
import TweetCard from "react-tweet-card";
import isVerified from "react-tweet-card";
import { Avatar } from "antd";
import { tweetPosts } from "../../TweetData/TweetData";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollIcon from "@mui/icons-material/Poll";
import UploadIcon from "@mui/icons-material/Upload";

function TwitterPost() {
  const [likes, setLikes] = useState(0);
  function handleLike() {
    setLikes(likes=likes+1);
  }
  const PostData = tweetPosts;
  return (
    <>
      <div className={style.container}>
        {PostData.map((Data) => {
          return (
            <>
              <div className={style.wrapper}>
                <div className={style.content} key={Data.id}>
                  <Avatar className={style.Avtar} src={Data.tweetPic} />
                  <div className={style.details}>
                    <h3>{Data.name}</h3>
                    <p>{Data.handlerName}</p>
                  </div>
                </div>
                <img alt="not work" className={style.img} src={Data.tweetPic} />
                <div className={style.icons}>
                  <div className={style.contentIcon}>
                    <div>{Data.tweetCount}</div>
                    <ChatBubbleOutlineIcon />
                  </div>
                  <span>
                    {Data.retweetCount}
                    <SyncIcon />
                  </span>
                  <span>
                    {Data.likesCount}
                    {likes}
                    <button className={style.likebtn} onClick={handleLike}>
                      <FavoriteBorderIcon />
                    </button>
                  </span>
                  <span>
                    {Data.viewsCount}
                    <PollIcon />
                  </span>

                  <UploadIcon />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default TwitterPost;
