import  { useState, useCallback, useEffect } from 'react';

const useFilterArticles = (articles) => {
  const [filtredArticles, setFiltredArticles] = useState();
  const [filterValue, setFilterValue] = useState("");
  
  const filterArticlesHandler = useCallback(() => {
    const filtredArticles = articles.filter(item => {
      return item.title.toLowerCase().includes(filterValue.toLowerCase());
    });
    setFiltredArticles(filtredArticles);
  }, [articles, filterValue]);
  
  useEffect(() => {
    filterArticlesHandler();
  }, [filterArticlesHandler, filterValue]);

  return {filtredArticles,setFilterValue,filterValue}
}

export default useFilterArticles

