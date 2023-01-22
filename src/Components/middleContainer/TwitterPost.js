import React from "react";
import { GoVerified } from "react-icons/go";
import style from "./TwitterPost.module.css";
import TweetCard from "react-tweet-card";
import isVerified from "react-tweet-card";

function TwitterPost() {
  // const post = [
  //   {
  //     id: 1,
  //     Name: "Bhavish ",
  //     Verified: <GoVerified />,
  //     HandleName: "@Bhavism009",
  //     Title: "LovE ❤️",
  //     Content: "Some Happy Moments ",
  //   },
  //   {
  //     id: 2,
  //     Name: "Bhavish ",
  //     Verified: <GoVerified />,
  //     HandleName: "@Bhavism009",
  //     Title: "LovE ❤️",
  //     Content: "Some Happy Moments ",
  //   },
  //   {
  //     id: 3,
  //     Name: "Bhavish ",
  //     Verified: <GoVerified />,
  //     HandleName: "@Bhavism009",
  //     Title: "LovE ❤️",
  //     Content: "Some Happy Moments ",
  //   },
  //   {
  //     id: 4,
  //     Name: "Bhavish ",
  //     Verified: <GoVerified />,
  //     HandleName: "@Bhavism009",
  //     Title: "LovE ❤️",
  //     Content: "Some Happy Moments ",
  //   },
  //   {
  //     id: 5,
  //     Name: "Bhavish ",
  //     Verified: <GoVerified />,
  //     img: "https://www.shutterstock.com/image-photo/man-hands-holding-global-network-260nw-1801568002.jpg",
  //     HandleName: "@Bhavism009",
  //     Title: "LovE ❤️",
  //     Content: "Some Happy Moments ",
  //   },
  // ];

  return (
    <>
      {/* {post.map((data) => {
        return (
          <div className={style.feed} key={data.id}>
            <div>
              <div className={style.feed__header}>
                <h5>{data.Name}</h5> <h3>{data.Verified}</h3>
              </div>
              <span>{data.HandleName}</span>
              <h6>{data.Title}</h6>
              <h5>{data.Content}</h5>
              <img src={data.img} />
            </div>
          </div>
        );
      })}
      <h1 style={{ color: "white" }}>Hello</h1> */}
      <TweetCard
        engagement={{
          replies: 206,
          retweets: 17600,
          likes: 128200,
        }}
        emojis={true} // try setting this to true 👀
        showDetails={true} // try setting this to true 😬
        theme="dim"
        border="3px"
        author={{
          name: "virat",
          username: "virat",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Virat_Kohli_portrait.jpg/725px-Virat_Kohli_portrait.jpg",
          isVerified,
        }}
        tweet={`You say that it's fucked that gingerbread men live in gingerbread houses, but to a gingerbread person, gingerbread is as inscrutable and fundamental as carbon. The people and homes are no more alike than humans are to diamonds. Only we, their gods and creators, can see the horror`}
        time={new Date(2021, 11, 21, 14, 6)}
        source="Twitter for iPhone"
        permalink="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Virat_Kohli_portrait.jpg/725px-Virat_Kohli_portrait.jpg"
        fitInsideContainer
      />

      <TweetCard
        engagement={{
          replies: 206,
          retweets: 17600,
          likes: 128200,
        }}
        emojis={true} // try setting this to true 👀
        showDetails={true} // try setting this to true 😬
        theme="dim"
        border="3px"
        author={{
          name: "rohit ",
          username: "Rohit",
          image: "https://image3.mouthshut.com/images/imagesp/925047023s.jpeg",
        }}
        tweet={`You say that it's fucked that gingerbread men live in gingerbread houses, but to a gingerbread person, gingerbread is as inscrutable and fundamental as carbon. The people and homes are no more alike than humans are to diamonds. Only we, their gods and creators, can see the horror`}
        time={new Date(2021, 11, 21, 14, 6)}
        source="Twitter for iPhone"
        permalink="https://twitter.com/ethanhardy/status/1473278732676837382"
        fitInsideContainer
        blurredBackground
      />
    </>
  );
}
export default TwitterPost;
