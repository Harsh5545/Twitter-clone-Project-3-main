import React from "react";
import style from "./Tweet.module.css";
import { FaGlobe, FaImage, FaMapMarker } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import CustomButton from "../CustomButton/CustomButton";
function Tweet() {
  return (
    <>
      <div className={style.main}>
        <div className={style.wrapper}>
          <textarea placeholder="What's happening?" rows={8} cols={60} />

          <div className={style.privacy}>
            <FaGlobe />
            <span>Everyone can reply</span>
          </div>

          <div className={style.bottom}>
            <ul className={style.icons}>
              <li>
                <FiCamera />
              </li>
              <li>
                <FaImage />
              </li>
              <li>
                <FaMapMarker />
              </li>
              <li>
                <CgSmileMouthOpen />
              </li>
              <li>
                <BiUserCircle />
              </li>
            </ul>
          </div>
        </div>
        <CustomButton buttonText="Tweet" customCss={style.button} />
      </div>
    </>
  );
}
export default Tweet;
