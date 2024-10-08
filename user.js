let button = document.getElementById("fetch-btn")

button.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
        return response.json()
    }).then((users) => {
        const userList = document.getElementById("display-data");
        userList.innerHTML = "";
        users.forEach((user) => {
            let userDiv = document.createElement("div");
            userDiv.classList.add("user-card");
            userDiv.style.margin = "10px";
            userDiv.style.padding = "10px";
            userDiv.style.border = "1px solid black";
            userDiv.innerHTML = `
                        <h3>${user.name}</h3>
                        <p>Username: ${user.username}</p>
                        <p>Email: ${user.email}</p>
                        <p>ID: ${user.id}</p>
                        <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                        <p>Phone: ${user.phone}</p>
                        `;
            userList.appendChild(userDiv);
        });
    })
})