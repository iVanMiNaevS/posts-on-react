import "../../style/App.css";
import { useEffect, useState } from "react";
import PostList from "../PostList";
import FormCreatePost from "../FormCreatePost";
import PostFilter from "../PostFilter";
import MyModal from "../UI/modal/MyModal";
import MyButton from "../UI/button/MyButton";
import { usePost } from "../hooks/usePost";
import PostServise from "../API/PostServise";
import Loader from "../UI/loader/Loader";
import useFetching from "../hooks/useFetching";
import getTotalPages from "../utils/getTotalPages";
import usePogination from "../hooks/usePogination";
import { useRef } from "react";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../UI/select/MySelect";
function Posts() {
    const [posts, setPosts] = useState([]);

    const [sortSelect, setSortSelect] = useState([
        { value: "Default value", text: "Сортировка" },
        { value: "title", text: "По заголовку" },
        { value: "body", text: "По описанию" },
    ]);
    const [limitSelect, setLimitSelect] = useState([
        { value: 5, text: "5 постов" },
        { value: 10, text: "10 постов" },
        { value: 25, text: "25 постов" },
        { value: -1, text: "все посты" },
    ]);
    const [filter, setFilter] = useState({ sortOf: "", searchQuery: "" });
    const [visibleModal, setVisibleModal] = useState(false);
    const [limit, setLimit] = useState(10);
    const [totalPages, setTotalPages] = useState(10);
    const [page, setPage] = useState(1);

    const pagesArr = usePogination(totalPages);
    const triger = useRef();
    const observer = useRef();
    const [fetchPosts, loading, error] = useFetching(async (limit, page) => {
        const response = await PostServise.getAllPosts(limit, page);
        const totalPosts = response.headers["x-total-count"];
        setPosts([...posts, ...response.data]);
        console.log(posts);
        setTotalPages(getTotalPages(limit, totalPosts));
    });

    const sortedAndSearchPosts = usePost(
        posts,
        filter.sortOf,
        filter.searchQuery
    );

    function addPost(post) {
        setPosts([...posts, post]);
        setVisibleModal(false);
    }
    function deletePost(id) {
        setPosts(posts.filter((el) => String(el.id) !== id));
    }

    function changePage(page) {
        setPage(page);
    }

    useObserver(triger, page < totalPages, loading, () => {
        setPage((prev) => prev + 1);
    });

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit]);

    return (
        <div className="container">
            <MyModal visible={visibleModal} setVisible={setVisibleModal}>
                <FormCreatePost addPost={addPost} />
            </MyModal>
            <MyButton
                style={{
                    backgroundColor: "#fffdd0",
                    color: "#000",
                    marginBottom: 10,
                }}
                onClick={(e) => {
                    setVisibleModal(true);
                }}
            >
                Создать пост
            </MyButton>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
                sortSelect={sortSelect}
            />
            <MySelect
                options={limitSelect}
                value={limit}
                onChange={(e) => {
                    console.log(e.target.value);
                    setLimit(e.target.value);
                }}
            />
            {error && <div>{error}</div>}

            {loading && <Loader />}
            <PostList
                page={page}
                posts={sortedAndSearchPosts}
                deletePost={deletePost}
            />
            <div ref={triger} style={{ height: 20, background: "red" }}></div>
            <div className="div-wrapper">
                {pagesArr.map((pageNum) => {
                    return (
                        <span
                            onClick={() => {
                                changePage(pageNum);
                            }}
                            key={pageNum}
                            className={
                                page === pageNum ? "page current" : "page"
                            }
                        >
                            {pageNum}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}

export default Posts;
