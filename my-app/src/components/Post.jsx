import React from "react";
import MyButton from "./UI/button/MyButton";
import "../style/Post.css";
import { useNavigate } from "react-router-dom";
export default function Post({ post, deletePost }) {
    const navigate = useNavigate();

    return (
        <div className="post" data-id={post.id}>
            <div className="main-part">
                <h3 className="title">
                    <span className="number">{post.number}.</span> {post.title}
                </h3>
                <div className="description">{post.body}</div>
            </div>
            <MyButton
                onClick={(e) => {
                    navigate(`/posts/${post.id}`);
                }}
            >
                открыть
            </MyButton>
            <MyButton
                onClick={(e) => {
                    deletePost(e.target.parentNode.dataset.id);
                }}
            >
                удалить
            </MyButton>
        </div>
    );
}
