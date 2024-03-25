import React from "react";
import classes from "./myInput.module.css";

function MyInput({ ...props }) {
    return <input className={classes.myInput} {...props} />;
}

export default MyInput;
