interface TasksInterface {
    myTasks: string[];
    addTask(task: string): number;
    listAllTasks(): void;
    deleteTask(task: string): number;
}

class Tasks implements TasksInterface {
    constructor() {}
    myTasks: string[] = [];

    addTask(task: string): number {
        console.log(task + " has been added to my task list.");
        this.myTasks.push(task);  // Add the task to the array
        return this.myTasks.length;
    }

    listAllTasks(): void {
        for (let i = 0; i < this.myTasks.length; i++) {
            console.log("Task: " + this.myTasks[i] + " is in my tasks list.");
        }
    }

    deleteTask(task: string): number {
        let index: number = this.myTasks.indexOf(task);
        if (index !== -1) {
            this.myTasks.splice(index, 1);  // Remove the task from the array
            console.log(task + " has been removed from task list.");
        } else {
            console.log(task + " not found in task list.");
        }
        return this.myTasks.length;
    }
}

let myTodo = new Tasks();
myTodo.addTask("Sleep");
myTodo.addTask("Eat");
myTodo.listAllTasks();
myTodo.deleteTask("Sleep");
myTodo.listAllTasks();
