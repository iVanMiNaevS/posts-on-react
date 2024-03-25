import React from "react";
import Post from "./Post.jsx";
import "../style/PostList.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
function PostList({ posts, deletePost, page }) {
    return (
        <div className="post-list">
            <TransitionGroup>
                {posts.map((post, index) => {
                    post.number = post.id;
                    return (
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                        >
                            <Post
                                post={post}
                                key={post.id}
                                deletePost={deletePost}
                            />
                        </CSSTransition>
                    );
                })}
            </TransitionGroup>
        </div>
    );
}

export default PostList;
