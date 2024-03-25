import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PostServise from "../API/PostServise";
import useFetching from "../hooks/useFetching";
import Loader from "../UI/loader/Loader";

function PagePostbyId() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, loading, error] = useFetching(async (id) => {
        const response = await PostServise.getPostById(id);
        setPost(response.data);
    });
    const [fetchComm, loadingComm, errorComm] = useFetching(async (id) => {
        const response = await PostServise.getCommentPost(id);
        setComments(response.data);
    });
    useEffect(() => {
        fetchPostById(params.id);
        fetchComm(params.id);
    }, []);
    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <h1 style={{ textAlign: "center" }}>Страница поста</h1>
                    <p style={{ textAlign: "center", fontSize: 20 }}>
                        {post.id}
                        {post.title}
                    </p>
                    <p style={{ textAlign: "center", fontSize: 20 }}>
                        {post.body}
                    </p>
                    <div>
                        {comments.map((comment) => {
                            return (
                                <div
                                    style={{
                                        marginLeft: "10px",
                                        marginTop: "30px",
                                    }}
                                >
                                    <p>{comment.email}</p>
                                    <p>{comment.body}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PagePostbyId;
