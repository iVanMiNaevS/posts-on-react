import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
function PostFilter({ filter, setFilter, sortSelect }) {
    return (
        <div>
            <MyInput
                style={{ marginBottom: "10px", fontSize: "20px" }}
                onChange={(e) => {
                    setFilter({ ...filter, searchQuery: e.target.value });
                }}
                value={filter.searchQuery}
                placeholder="Search"
            />
            <MySelect
                options={sortSelect}
                onChange={(e) => {
                    setFilter({ ...filter, sortOf: e.target.value });
                }}
            />
        </div>
    );
}

export default PostFilter;
