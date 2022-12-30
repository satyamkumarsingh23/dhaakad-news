let breakingimg = document.querySelector("#breakingimg");
let breakingnews_title = document.querySelector("#breakingnews .title-news");
const apiKey = "950efe50270b4c6d9324d0b8591fca95"
const fetchData = async (category,pageSize)=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
    const data = await fetch(url)
    const response = await data.json()
    console.log(response);
    return response.articles
}
const add_breakingnews = (data)=>{
    breakingimg.innerHTML = `<img src=${data[0].urlToImage } alt="image">`
    breakingnews_title.innerHTML = `<a href=${data[0].url} target="_blank"><h2>${data[0].title}</h2></a>`
}
fetchData(`general`,5).then(add_breakingnews)