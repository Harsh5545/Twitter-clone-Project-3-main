import React from "react";
import style from "./RightSide.module.css";
import Input from "../../../Atom/Input/Input";
import Righthomebox2 from "../../rightContainer/RightContainer2/RightContainer2";

function RightSide() {
  return (
    <div className={style.container}>
      <Input classname={StyleSheetList.right} />;
      <Righthomebox2 />
    </div>
  );
}

export default RightSide;
