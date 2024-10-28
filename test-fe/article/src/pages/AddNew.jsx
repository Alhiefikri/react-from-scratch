import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addArticle } from "../slices/article";

const AddNew = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialState = {
    id: "",
    title: "",
    content: "",
    category: "",
    status: "",
  };
  const [formData, setFormData] = useState(initialState);
  const { title, content, category, status } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addArticle(formData));
    navigate("/");
  };
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="app">
      <Navbar />
      <div className="layout">
        <div className="new">
          <div className="title mb-20">Tambah Article</div>
          <form onSubmit={handleSubmit} className="flex-col gap-16">
            <div className="flex-col gap-12 flex-1">
              <label className="text">Title</label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                value={title}
                className="input"
              />
            </div>
            <div className="flex-col gap-12 flex-1">
              <label className="text">Content</label>
              <textarea
                type="text"
                name="content"
                onChange={handleChange}
                value={content}
                className="input"
              />
            </div>
            <div className="flex-col gap-12 flex-1">
              <label className="text">Category</label>
              <input
                type="text"
                name="category"
                onChange={handleChange}
                value={category}
                className="input"
              />
            </div>
            <div className="flex-col gap-12 flex-1">
              <label className="text">Status</label>
              <select
                name="status"
                value={status}
                type="text"
                className="select"
                onChange={handleChange}
              >
                <option value="" selected disabled hidden>
                  Choose Here
                </option>
                <option value="publish">publish</option>
                <option value="draft">Draft</option>
              </select>
            </div>
            <div className="button">
              <input type="submit" value="Save" className="button-submit" />
              <button className="button-cancel" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
