import React from "react";
import { Link } from "react-router-dom";

export default function ArticleNavgation() {
  return (
    <div>
      <div className="article_sub_navigation" style={subNavStyle}>
        <ul style={ulStyle} className="test">
          <li className="subNav change" id="selected">
            <Link to="/article">HOT 10</Link>
          </li>
          <li className="subNav">
            <Link to="/article">Latest</Link>
          </li>
          <li className="subNav">
            <Link to="/article">Nutrition</Link>
          </li>
          <li className="subNav">
            <Link to="/article">Health</Link>
          </li>
          <li className="subNav">
            <Link to="/article">Beauty</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

const subNavStyle = {
  height: "10%",
  textAlign: "center",
};

const ulStyle = {
  display: "inline-block",
  listStyle: "none",
  margin: "0",
  padding: "0",
};

/* let container = document.querySelector('.test');
let labels = document.querySelector('.subNav');
labels.forEach(function(item){
    item.onclick = function(){
        labels.forEach(function(temp){
            temp.classList.remove("change");
        })
        item.classList.add("change");
    }
}
) */
