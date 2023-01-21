import React from "react";

import { GoVerified } from "react-icons/go";

import { Avatar } from "@mui/material";

function TwitterPost() {
  const post = [
    {
      id: 1,
      Name: "Bhavish ",
      Verified: <GoVerified />,
      HandleName: "@Bhavism009",
      Title: "LovE ❤️",
      Content: "Some Happy Moments ",
    },
    {
      id: 2,
      Name: "Bhavish ",
      Verified: <GoVerified />,
      HandleName: "@Bhavism009",
      Title: "LovE ❤️",
      Content: "Some Happy Moments ",
    },
    {
      id: 3,
      Name: "Bhavish ",
      Verified: <GoVerified />,
      HandleName: "@Bhavism009",
      Title: "LovE ❤️",
      Content: "Some Happy Moments ",
    },
    {
      id: 4,
      Name: "Bhavish ",
      Verified: <GoVerified />,
      HandleName: "@Bhavism009",
      Title: "LovE ❤️",
      Content: "Some Happy Moments ",
    },
    {
      id: 5,
      Name: "Bhavish ",
      Verified: <GoVerified />,
      HandleName: "@Bhavism009",
      Title: "LovE ❤️",
      Content: "Some Happy Moments ",
    },
  ];

  return (
    <>
      {post.map((data) => {
        <div key={data.id}>
          <div style={{ backgroundColor: "white" }}>
            <h5 style={{ backgroundColor: "blue" }}>{data.Name}</h5>
            <Avatar alt="Remy Sharp" src={data.Verified} />
            <span>{data.HandleName}</span>
            <h6>{data.Title}</h6>
            <h5>{data.Content}</h5>
          </div>
        </div>;
        <h1>Hello</h1>;
      })}
    </>
  );
}
export default TwitterPost;
