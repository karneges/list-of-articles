import React, { useState, useEffect } from "react";
import ArticlesList from "./components/articles/articles-list";
import Header from "./components/header/header";
import ModalFormAddArticles from "./components/modal/modal-form-add-articles";
import { Input } from "antd";
import useFilterArticles from "./hooks/use-filter-articles";
import getInitialState from "./utils/getInitialstate";
import getNewId from "./utils/utils";

function App() {
  const [articles, setArticles] = useState(getInitialState);
  const { filtredArticles, setFilterValue, filterValue } = useFilterArticles(
    articles
  );
  const deleteArticleHandler = id => {
    setArticles(prev => {
      return prev.filter(item => item.id !== id);
    });
  };
  const addArticlesHandler = item => {
    setArticles(prev => [{ ...item, id: getNewId(articles) }, ...prev]);
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(articles));
  }, [articles]);
  return (
    <div className="container">
      <Header />
      <ModalFormAddArticles addArticlesHandler={addArticlesHandler}>
        <Input
          value={filterValue}
          onChange={e => setFilterValue(e.target.value)}
          placeholder="Найти пост"
        />
      </ModalFormAddArticles>
      <section>
        <ArticlesList
          onDelete={deleteArticleHandler}
          articles={filtredArticles}
        />
      </section>
    </div>
  );
}

export default App;
