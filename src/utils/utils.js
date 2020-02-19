const getNewId = (articles=[]) => {
  if(articles.length === 0){
    return 1
  }
return articles.sort((a,b)=>b.id-a.id)[0].id+1
}

export default getNewId;