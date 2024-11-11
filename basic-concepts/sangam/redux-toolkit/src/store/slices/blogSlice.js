import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  formData: {
    title: "",
    description: "",
  },
  blogList: [],
  currentEditedBlogId: null,
};

export const BlogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    handleInputChange: (state, action) => {
      let copyFormData = { ...state.formData };
      copyFormData = { ...copyFormData, ...action.payload };
      state.formData = copyFormData;
    },

    handleAddTodo: (state, action) => {
      console.log("handleAddTodo is called");

      state.blogList.push({
        id: nanoid(),
        ...state.formData,
      });

      state.formData = {
        title: "",
        description: "",
      };

      localStorage.setItem("blogList", JSON.stringify(state.blogList));
    },

    setBlogListOnInitialLoad: (state, action) => {
      state.blogList = action.payload.blogList;
    },

    handleDeleteBlog: (state, action) => {
      console.log(action.payload);
      const { payload } = action;
      const { currentBlogId } = payload;

      let copyBlogList = [...state.blogList];

      copyBlogList = copyBlogList.filter(
        (singleBlogItem) => singleBlogItem.id !== currentBlogId
      );

      state.blogList = copyBlogList;
      localStorage.setItem("blogList", JSON.stringify(copyBlogList));
    },
    setCurrentEditedBlogId: (state, action) => {
      console.log(action.payload);
      const { payload } = action;
      const { currentBlogId } = payload;

      state.currentEditedBlogId = currentBlogId;
    },

    handleEditBlog: (state, action) => {
      console.log("handleEditBlog is called");

      let copyBlogList = [...state.blogList];
      const findIndexOfCurrentBlogItem = copyBlogList.findIndex(
        (singleBlogItem) => singleBlogItem.id === state.currentEditedBlogId
      );
      console.log(findIndexOfCurrentBlogItem);

      copyBlogList[findIndexOfCurrentBlogItem] = {
        ...copyBlogList[findIndexOfCurrentBlogItem],
        ...state.formData,
      };

      state.blogList = copyBlogList;
      localStorage.setItem("blogList", JSON.stringify(copyBlogList));
    },
  },
});

export const {
  handleInputChange,
  handleAddTodo,
  setBlogListOnInitialLoad,
  handleDeleteBlog,
  setCurrentEditedBlogId,
  handleEditBlog,
} = BlogSlice.actions;

export default BlogSlice.reducer;
