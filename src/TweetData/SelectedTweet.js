import React from "react";
import { useRecoilValue } from "recoil";
import { selectedTweet } from "../Recoil/Atom1/Atom";

function SelectedTweet() {
    const selectedId = useRecoilValue(selectedTweet);
    return <h1>SelectedTweet { selectedId}</h1>;
}

export default SelectedTweet;
