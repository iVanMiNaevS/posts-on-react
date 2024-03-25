import React from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import "../style/FormCreatePost.css";
import { useState } from "react";

function FormCreatePost({ addPost }) {
    const [valueTitle, setValueTitle] = useState("");
    const [valueDesc, setValueDesc] = useState("");
    const [valid, setValid] = useState(true);

    function createPost(e, post) {
        post.id = Math.random();
        e.preventDefault();
        addPost(post);
        setValueTitle("");
        setValueDesc("");
    }
    return (
        <form>
            <MyInput
                placeholder="Title"
                onChange={(e) => {
                    setValueTitle(e.target.value);
                }}
                value={valueTitle}
            />
            <MyInput
                placeholder="Description"
                onChange={(e) => {
                    setValueDesc(e.target.value);
                }}
                value={valueDesc}
            />
            {!valid && <div>Ошибка</div>}
            <MyButton
                onClick={(e) => {
                    if (valueTitle === "" || valueDesc === "") {
                        e.preventDefault();
                        setValid(false);
                    } else {
                        setValid(true);
                        createPost(e, {
                            title: valueTitle,
                            body: valueDesc,
                        });
                    }
                }}
            >
                Создать пост
            </MyButton>
        </form>
    );
}

export default FormCreatePost;
