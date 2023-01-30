import { atom } from "recoil";

export const isLoginAtom = atom({
  key: "isLogin",
  default: true,
});

export const isTweetPost = atom({
  key: "isPost",
  default: 0,
}); 
export const isTweetSelected = atom({
  key: "isSelectedPost",
  default:false
})

export const selectedTweet = atom({
  key: "selevtedtweet",
  default: 0
})