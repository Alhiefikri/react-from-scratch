import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  handleDeleteBlog,
  handleInputChange,
  setBlogListOnInitialLoad,
  setCurrentEditedBlogId,
} from "../store/slices/blogSlice";
import { current } from "@reduxjs/toolkit";

function BlogList() {
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state);
  const { blogList } = blog;

  useEffect(() => {
    dispatch(
      setBlogListOnInitialLoad({
        blogList: JSON.parse(localStorage.getItem("blogList") || "[]"),
      })
    );
  }, []);

  function onDeleteBlog(getCurrentBlogId) {
    console.log(getCurrentBlogId);
    dispatch(
      handleDeleteBlog({
        currentBlogId: getCurrentBlogId,
      })
    );
  }

  function onEditBlog(getCurrentBlog) {
    dispatch(
      setCurrentEditedBlogId({
        currentBlogId: getCurrentBlog?.id,
      })
    );

    dispatch(
      handleInputChange({
        title: getCurrentBlog?.title,
        description: getCurrentBlog?.description,
      })
    );
  }

  console.log(blogList);

  return (
    <ul>
      {blogList?.length > 0 ? (
        blogList.map((singleBlogItem) => (
          <div
            style={{ border: "1px solid black", padding: "10px" }}
            key={singleBlogItem.id}
          >
            <h3>{singleBlogItem.title}</h3>
            <p>{singleBlogItem.description}</p>
            <button onClick={() => onEditBlog(singleBlogItem)}>
              Edit Blog
            </button>
            <button onClick={() => onDeleteBlog(singleBlogItem.id)}>
              Delete Blog
            </button>
          </div>
        ))
      ) : (
        <h1>No Blog Found | Please Add New Blog</h1>
      )}
    </ul>
  );
}

export default BlogList;
