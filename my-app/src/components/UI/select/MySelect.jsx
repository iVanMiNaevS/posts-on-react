import React from "react";

export default function MySelect({ options, ...props }) {
    return (
        <select {...props}>
            {options.map((option) => {
                return (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                );
            })}
        </select>
    );
}
