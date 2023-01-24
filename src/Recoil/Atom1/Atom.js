import { atom } from "recoil";

export const isLoginAtom = atom({
  key: "isLogin",
  default: true,
});

export const islatestAtom = atom({
  key: "latestTweet",
  default: true,
});
