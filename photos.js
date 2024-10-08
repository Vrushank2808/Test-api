let button = document.getElementById("fetch-btn")

button.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/photos").then((response) => {
        return response.json()
    }).then((photos) => {
        const displayData = document.getElementById("display-data")
            photos.forEach((photo) => {
                let img = document.createElement("img")
                img.classList.add("photo")
                img.style.margin = "10px"
                img.style.padding = "10px"
                img.style.border = "1px solid black"
                img.style.width = "200px"
                img.style.display = "block"
                img.src = photo.url
                displayData.appendChild(img)
            })
    })
})