var Tasks = /** @class */ (function () {
    function Tasks() {
        this.myTasks = [];
    }
    Tasks.prototype.addTask = function (task) {
        console.log(task + " has been added to my task list.");
        this.myTasks.push(task); // Add the task to the array
        return this.myTasks.length;
    };
    Tasks.prototype.listAllTasks = function () {
        for (var i = 0; i < this.myTasks.length; i++) {
            console.log("Task: " + this.myTasks[i] + " is in my tasks list.");
        }
    };
    Tasks.prototype.deleteTask = function (task) {
        var index = this.myTasks.indexOf(task);
        if (index !== -1) {
            this.myTasks.splice(index, 1); // Remove the task from the array
            console.log(task + " has been removed from task list.");
        }
        else {
            console.log(task + " not found in task list.");
        }
        return this.myTasks.length;
    };
    return Tasks;
}());
var myTodo = new Tasks();
myTodo.addTask("Sleep");
myTodo.addTask("Eat");
myTodo.listAllTasks();
myTodo.deleteTask("Sleep");
myTodo.listAllTasks();
