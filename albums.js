const button = document.getElementById("fetch-btn")

button.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/albums").then((Response) => {
        return Response.json()
    }).then((albums) => {
        const ul = document.getElementById("display-data")
        for (let i = 0; i < albums.length; i++) {
            const li = document.createElement("li")
            li.classList.add("album")
            li.style.margin = "10px"
            li.style.padding = "10px"
            li.style.border = "1px solid black"
            li.style.width = "200px"
            li.style.display = "block"
            li.innerText = albums[i].title
            ul.appendChild(li)
        }
    })
})