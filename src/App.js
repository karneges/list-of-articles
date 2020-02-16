import React, { useState } from "react";
import ArticlesList from "./components/articles/articles-list";
import initialState from "./initials-state/initial-state";
import Header from "./components/header/header";
import MyModal from "./components/modal/modal";
import CollectionPage from "./components/modal/test-modal";
function App() {
  const [articles, setArticles] = useState(initialState);

  const onDeleteArticle = id => {
    setArticles((prev)=>{
      return prev.filter((item)=>item.id !== id)
    })
  };
  const onAddItem = () =>{}
  return (
    <div className="container">
      <Header />
      {/* <MyModal/> */}
      <CollectionPage/>
      <section>
        <ArticlesList onDelete={onDeleteArticle} articles={articles} />
      </section>
    </div>
  );
}

export default App;
