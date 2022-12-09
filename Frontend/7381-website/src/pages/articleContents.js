import React, { useState, useEffect } from "react";
import Header from "./NavComponents/navigation";
import axios from "axios";
import { BACKEND_URL } from "./plugin";
import { Link, useParams } from "react-router-dom";
import "../pages/Style/articleContentsStyle.css";

function ArticleContents(props) {
  const [article, setArticle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // const slug = props.match.params.id;
    console.log(id);

    const fetchData = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/writings/${id}/`);
        setArticle(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const createArticle = () => {
    return { __html: article.content };
  };

  return (
    <div>
      <Header />
      <div className="container">
        <img className="picture"></img>
        <h1 className="title">{article.title}</h1>
        <h4>Date Posted: {article.date_created}</h4>
        <div
          className="content"
          dangerouslySetInnerHTML={createArticle()}
        ></div>
        <h2 className="topic">Topic: {article.category}</h2>
        <hr />
        <p className="link">
          <Link to="/article" className="font-weight-bold">
            Back to Article Page.
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ArticleContents;
