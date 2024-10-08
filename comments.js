let button = document.getElementById("fetch-btn")

button.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/comments").then((response) => {
        return response.json()
    }).then((comments) => {
        const div = document.getElementById("display-data");
        comments.forEach((comment) => {
            const p = document.createElement("p")
            p.innerHTML = `
                    <h4>NAME : ${comment.name}</h4>
                    <p>EMAIL : ${comment.email}</p>
                    <p>COMMENT : ${comment.body}</p>
                    <hr>
                `

            div.appendChild(p)
        });
    })
})