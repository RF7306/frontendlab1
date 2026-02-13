let myTasks: Array<string> = [];

function addTask(task:string){

    myTasks.push(task);
    console.log(task+ " has been inserted into the array");
    return myTasks.length;
    }

function listAllTasks():void{
    
    for (let i = 0; i<myTasks.length;i++){
        console.log("Task " + myTasks[i] + " is in my tasks list");
        
    }

    }

function deleteTask(task:string){
    let index:number = myTasks.indexOf(task);
    if (index === -1) {
        console.log(task + " is not in my Tasks list.");
    } else {
        myTasks.splice(index, 1);
        console.log(task+ " has been removed from my Tasks list.");

    }
    return myTasks.length;

  }


addTask("Eat");
addTask("Study");
listAllTasks();
deleteTask("Eat");
