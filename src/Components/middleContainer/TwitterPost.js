import React from "react";
import style from "./TwitterPost.module.css";
import { FiMessageCircle } from "react-icons/fi";
import { GoVerified } from "react-icons/go";
import { FaRetweet } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { VscGraph } from "react-icons/vsc";
import { MdIosShare } from "react-icons/md";
function TwitterPost() {
  return (
    <div>
      <div className={style.feed}>
        <div className={style.tweetBox}>
          <form>
            <div className={style.tweetbox__input}>
              <img
                src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
                alt=""
              />
              <input type="text" placeholder="What's happening?" />
            </div>
            <button className={style.tweetBox__tweetButton}>Tweet</button>
          </form>
        </div>
        <div className={style.post}>
          <div className={style.post__avatar}>
            <img
              src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
              alt=""
            />
          </div>
          <div className={style.post__body}>
            <div className={style.post__header}>
              <div className={style.post__headerText}>
                <h3>
                  Unknown
                  <span className={style.post__headerSpecial}>
                    <GoVerified />
                    @something
                  </span>
                </h3>
              </div>
              <div className={style.post__headerDescription}>
                <p>Lorem ipsum abdhfh afnjn afnmd af</p>
              </div>
            </div>
            <img
              src="https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg"
              alt=""
            />
            <div className={style.post__footer}>
              <FiMessageCircle />
              5,369
              <FaRetweet />
              1256
              <FcLike />
              1.2M
              <VscGraph />
              <MdIosShare />
            </div>
          </div>
        </div>
        <div className={style.post}>
          <div className={style.post__avatar}>
            <img
              src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
              alt=""
            />
          </div>
          <div className={style.post__body}>
            <div className={style.post__header}>
              <div className={style.post__headerText}>
                <h3>
                  Unknown
                  <span className={style.post__headerSpecial}>
                    <GoVerified />
                    @something
                  </span>
                </h3>
              </div>
              <div className={style.post__headerDescription}>
                <p>Lorem ipsum abdhfh afnjn afnmd af</p>
              </div>
            </div>
            <img
              src="https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg"
              alt=""
            />
            <div className={style.post__footer}>
              <FiMessageCircle />
              5,369
              <FaRetweet />
              1256
              <FcLike />
              1.2M
              <VscGraph />
              <MdIosShare />
            </div>
          </div>
        </div>
        <div className={style.post}>
          <div className={style.post__avatar}>
            <img
              src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
              alt=""
            />
          </div>
          <div className={style.post__body}>
            <div className={style.post__header}>
              <div className={style.post__headerText}>
                <h3>
                  Unknown
                  <span className={style.post__headerSpecial}>
                    <GoVerified />
                    @something
                    {/* <span className={style.materialiconspost__badge}> verified </span>@somanathg */}
                  </span>
                </h3>
              </div>
              <div className={style.post__headerDescription}>
                <p>Lorem ipsum abdhfh afnjn afnmd af</p>
              </div>
            </div>
            <img
              src="https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg"
              alt=""
            />
            <div className={style.post__footer}>
              <FiMessageCircle />
              5,369
              <FaRetweet />
              1256
              <FcLike />
              1.2M
              <VscGraph />
              <MdIosShare />
            </div>
          </div>
        </div>
        <div className={style.post}>
          <div className={style.post__avatar}>
            <img
              src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
              alt=""
            />
          </div>
          <div className={style.post__body}>
            <div className={style.post__header}>
              <div className={style.post__headerText}>
                <h3>
                  Unknown
                  <span className={style.post__headerSpecial}>
                    <GoVerified />
                    @something
                    {/* <span className={style.materialiconspost__badge}> verified </span>@somanathg */}
                  </span>
                </h3>
              </div>
              <div className={style.post__headerDescription}>
                <p>Lorem ipsum abdhfh afnjn afnmd af</p>
              </div>
            </div>
            <img
              src="https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg"
              alt=""
            />
            <div className={style.post__footer}>
              <FiMessageCircle />
              5,369
              <FaRetweet />
              1256
              <FcLike />
              1.2M
              <VscGraph />
              <MdIosShare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TwitterPost;
