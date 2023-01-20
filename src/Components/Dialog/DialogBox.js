import Dialog from "@mui/material/Dialog";
import CustomButton from "../../Atom/Button/CustomButton";
import style from "./Dialog.module.css";
import React from "react";

function DialogBox(props) {
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <div className={style.container}>
        <CustomButton
          buttonText="Add an existing user"
          customCss={style.button}
        />
        <CustomButton buttonText="Logout" customCss={style.button} />
      </div>
    </Dialog>
  );
}
export default DialogBox;
