import React from "react";
import style from "./RightSide.module.css";
import Input from "../../../Atom/Input/Input";

function RightSide() {
  return (
    <div className={style.container}>
      <Input classname={StyleSheetList.right} />;
    </div>
  );
}

export default RightSide;
