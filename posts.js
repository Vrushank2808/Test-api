let button = document.getElementById("fetch-btn")

button.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
        return response.json()
    }).then((posts) => {
        const div = document.getElementById("display-data")
        posts.forEach((post) => {
            const p = document.createElement("p");
            p.classList.add("post");
            p.style.margin = "10px";
            p.style.padding = "10px";
            p.style.border = "1px solid black";
            p.style.display = "block";
            p.innerHTML = `
                        <h4>ID : ${post.id}</h4>
                        <p>TITLE : ${post.title}</p>
                        <p>BODY : ${post.body}</p>
                        <hr>
                    `;
            div.appendChild(p);
        });
    })
})