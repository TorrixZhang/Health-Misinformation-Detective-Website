import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../plugin";

function PostArticle() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState(null);
  const [content, setContent] = useState("");
  const [DateCreated, setDatecreated] = useState(null);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const slugChangeHandler = (e) => {
    setSlug(e.target.value);
  };
  const categoryChangeHandler = (e) => {
    setCategory(e.target.value);
  };
  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };
  const DateCreatedChangeHandler = (e) => {
    setDatecreated(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(category);

    const getFormData = (object) =>
      Object.keys(object).reduce((formData, key) => {
        formData.append(key, object[key]);
        return formData;
      }, new FormData());

    const data = {
      title: title,
      slug: slug,
      date_created: DateCreated,
      content: content,
      category: category,
    };

    const config = {
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
      },
    };
    const postForm = async () => {
      try {
        const res = await axios.post(
          `${BACKEND_URL}/api/writings/new/`,
          getFormData(data),
          config
        );
        // setBlogs(res.data);
        console.log("Submitted true");
      } catch (error) {
        console.log("Submitted false");
        console.log(error);
        console.log("Response body", error.response.data);
      }
    };
    postForm();
    alert("Success");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label class="fromTitle ">Title</label>
          <div class="col-sm-10">
            <input
              name="title"
              className="form-control"
              type="text"
              value={title}
              onChange={titleChangeHandler}
            />
          </div>
        </div>
        <div class="form-group">
          <label class="fromTitle ">Slug</label>
          <div class="col-sm-10">
            <input
              name="slug"
              className="form-control"
              type="text"
              value={slug}
              onChange={slugChangeHandler}
            />
          </div>
        </div>

        <div class="form-group">
          <label class="fromTitle">Topic</label>

          <div class="col-sm-10">
            <select
              className="form-control"
              name="category"
              value={category}
              onChange={categoryChangeHandler}
            >
              <option value="Nutrition">Nutrition</option>

              <option value="Diseases">Diseases</option>

              <option value="Beauty">Beauty</option>
            </select>
          </div>
        </div>

        <div class="form-group ">
          <label class="fromTitle ">Content</label>

          <div class="col-sm-10">
            <textarea
              name="content"
              className="form-control"
              onChange={contentChangeHandler}
            ></textarea>
          </div>
        </div>
        <div class="form-group ">
          <label class="fromTitle ">Date created</label>

          <div class="col-sm-10">
            <input
              name="date_created"
              className="form-control"
              type="datetime-local"
              defaultValue={DateCreated}
              onChange={DateCreatedChangeHandler}
            />
          </div>
        </div>
        <div class="form-actions">
          <button type="submit">Post it!</button>
        </div>
      </form>
    </div>
  );
}

export default PostArticle;
