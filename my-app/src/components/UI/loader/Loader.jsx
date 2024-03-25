import React from "react";
import cl from "./loader.module.css";
function Loader() {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={cl.loader}></div>;
        </div>
    );
}

export default Loader;
