import React, { useEffect, useState } from "react";
import axios from "axios";
import PostForm from "./components/postForm";
import CustomLayout from "./components/LayoutTest";
import logoPic from "../images/LOGO-H 1.png";
import { Link } from "react-router-dom";

const logoStyle = {
  height: "65px",
};

const PostArticle = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8888/api/member").then((res) => {
      setArticles(res.data);
    });
  }, []);
  return (
    <div>
      <section className="postSection">
        <Link to="/">
          <img src={logoPic} alt="logo" id="logo-picture" style={logoStyle} />
        </Link>
        <h2 className="post_navigation">Post Your Article Here</h2>
      </section>

      <CustomLayout>
        <PostForm />
      </CustomLayout>
    </div>
  );
};

export default PostArticle;
