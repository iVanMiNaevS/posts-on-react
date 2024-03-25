import React from "react";
import classes from "./mybt.module.css";

export default function MyButton({ children, ...props }) {
    return (
        <button {...props} className={classes.myBt}>
            {children}
        </button>
    );
}
