import React from "react";
import cl from "./myModal.module.css";

function MyModal({ children, visible, setVisible }) {
    const rootClasses = [cl.myModal];
    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div
            className={rootClasses.join(" ")}
            onClick={(e) => {
                setVisible(false);
            }}
        >
            <div
                className={cl.myModalContent}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default MyModal;
