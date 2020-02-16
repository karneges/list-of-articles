import React from "react";
import "./articles.scss";
const ArticlesItem = ({
  title = "",
  body = "",
  tags = [],
  onDelete = () => {}
}) => {
  return (
    <article>
      <header>
        <h3>{title}</h3>
      </header>
      <section>
        <p style={{ wordWrap: "break-word" }}>{body}</p>
      </section>
      <footer>
        <div className="tags">
          {tags.map(tag => {
            return (
              <button key={tag} className="btn btn-xs btn-default btn__tags">
                {tag}
              </button>
            );
          })}
        </div>
      </footer>
      <div className="controls">
        <button onClick={onDelete} className="btn btn-danger btn-mini">
          удалить
        </button>
      </div>
    </article>
  );
};

export default ArticlesItem;
