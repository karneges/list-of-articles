const getNewId = (articles) => {
return articles.sort((a,b)=>b.id-a.id)[0].id+1
}

export default getNewId;