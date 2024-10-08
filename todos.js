let button = document.getElementById("fetch-btn")

button.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
        return response.json()
    }).then((todos) => {
        const todoList = document.getElementById("display-data");
        todoList.innerHTML = "";

        todos.forEach((todo) => {
            let todoDiv = document.createElement("div");
            todoDiv.classList.add("todo-card");
            todoDiv.style.margin = "10px";
            todoDiv.style.padding = "10px";
            todoDiv.style.border = "1px solid black";

            todoDiv.innerHTML = `
        <h3>${todo.title}</h3>
        <p>Completed: ${todo.completed}</p>
        <p>ID: ${todo.id}</p>
        `;

            todoList.appendChild(todoDiv);
        });
    })
})