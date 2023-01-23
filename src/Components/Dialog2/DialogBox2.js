import Dialog from "@mui/material/Dialog";
import CustomButton from "../../Atom/Button/CustomButton";
import style from "./DialogBox2.module.css";
import React from "react";

function Dialog2(props) {
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <div className={style.dialog}>
      <Dialog onClose={handleClose} open={open}>
        <div className={style.container}>
          <CustomButton
            buttonText="Not intrestd in this "
            custom  Css={style.button}
          />
          <CustomButton buttonText="block" customCss={style.button} />
        </div>
      </Dialog>
    </div>
  );
}
export default Dialog2;
