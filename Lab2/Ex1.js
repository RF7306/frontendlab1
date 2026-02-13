var myTasks = [];
function addTask(task) {
    myTasks.push(task);
    console.log(task + " has been inserted into the array");
    return myTasks.length;
}
function listAllTasks() {
    for (var i = 0; i < myTasks.length; i++) {
        console.log("Task " + myTasks[i] + " is in my tasks list");
    }
}
function deleteTask(task) {
    var index = myTasks.indexOf(task);
    if (index === -1) {
        console.log(task + " is not in my Tasks list.");
    }
    else {
        myTasks.splice(index, 1);
        console.log(task + " has been removed from my Tasks list.");
    }
    return myTasks.length;
}
addTask("Eat");
addTask("Study");
listAllTasks();
