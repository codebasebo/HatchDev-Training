class Task {
    public id: number;
    public description: string;
    public isCompleted: boolean;

    constructor(id: number, description: string) {
        this.id = id;
        this.description = description;
        this.isCompleted = false;
    }

    public complete() {
        this.isCompleted = true;
    }
    public updateDescription(newDescription: string) {
        this.description = newDescription;
    }
    public getDescription() {
        return this.description;
    }

    public getId() {
        return this.id;
    }
}

class TaskManager {
    updateTask(arg0: number, arg1: string) {
        throw new Error("Method not implemented.");
    }
    static addTask(arg0: string) {
        throw new Error("Method not implemented.");
    }
    private tasks: Task[] = [];
    
    public addTask(description: string) {
        const id = this.tasks.length + 1;
        const task = new Task(id, description);
        this.tasks.push(task);
    }

    public completeTask(id: number) {
        for (let i =0; i < this.tasks.length; i++) {
            if (this.tasks[i].getId() === id) {
                this.tasks[i].complete();
                break;
            }
        }
    }

    public listOfCompletedTasks() {
        const completedTasks: Task[] = [];
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].isCompleted) {
                completedTasks.push(this.tasks[i]);
            }
        }
        return completedTasks;
    }

    public listNotCompletedTasks() {
        const notCompletedTasks: Task[] = [];
        for (let i = 0; i < this.tasks.length; i++) {
            if (!this.tasks[i].isCompleted) {
                notCompletedTasks.push(this.tasks[i]);
            }
        }
        return notCompletedTasks;
    }
    public getAllTasks() {
        return this.tasks;
    }

    public getTaskById(id: number) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].getId() === id) {
                return this.tasks[i];
            }
        }
        return null;
    }

    public deleteTask(id: number) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].getId() === id) {
                this.tasks.splice(i, 1);
                break;
            }
        }
    }
    


}

const manager = new TaskManager();

manager.addTask("Learn TypeScript");
manager.addTask("Build project");
console.log(manager.getAllTasks());

manager.completeTask(1);
console.log("Completed Tasks:", manager.listOfCompletedTasks());
console.log("Not Completed Tasks:", manager.listNotCompletedTasks());
manager.deleteTask(1);
console.log("All Tasks after deletion:", manager.getAllTasks());



