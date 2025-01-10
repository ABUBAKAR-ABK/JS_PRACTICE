             
    //                    Code for a To-Do App 

    // list : to show all todos 
    // add  : to add a todo 
    // delete : to delete a todo
    // quit   : to exit a todo 

    let todo = [];
    let req;
    
    while (true) {
        req = prompt("Please Enter your Request: (list, add, delete, quit)").toLowerCase();
    
        if (req === "quit") {
            console.log("Quitting app...");
            break;
        } else if (req === "list") {
            if (todo.length === 0) {
                console.log("The to-do list is empty.");
            } else {
                console.log("---------------");
                for (let i = 0; i < todo.length; i++) {
                    console.log(`${i}: ${todo[i]}`);
                }
                console.log("---------------");
            }
        } else if (req === "add") {
            let task = prompt("Please Enter the task you want to add").trim();
            if (task) {
                todo.push(task);
                console.log(`Task "${task}" added.`);
            } else {
                console.log("Task cannot be empty.");
            }
        } else if (req === "delete") {
            if (todo.length === 0) {
                console.log("No tasks to delete.");
            } else {
                let idx = parseInt(prompt("Please Enter the task index to delete"));
                if (!isNaN(idx) && idx >= 0 && idx < todo.length) {
                    let removed = todo.splice(idx, 1);
                    console.log(`Task "${removed}" deleted.`);
                } else {
                    console.log("Invalid index. Please try again.");
                }
            }
        } else {
            console.log("Invalid command. Please enter 'list', 'add', 'delete', or 'quit'.");
        }
    }
    