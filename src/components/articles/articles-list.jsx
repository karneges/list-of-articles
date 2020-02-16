import React from "react";
import ArticlesItem from "./articles-item";

const ArticlesList = ({ articles = [], onDelete = () => {} }) => {
  return (
    <div id="posts" className="well">
      {articles.map(item => {
        return (
          <ArticlesItem
            key={item.id}
            onDelete={() => onDelete(item.id)}
            title={item.title}
            body={item.body}
            tags={item.tags}
          />
        );
      })}
    </div>
  );
};

export default ArticlesList;
