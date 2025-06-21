var Task = /** @class */ (function () {
    function Task(id, description) {
        this.id = id;
        this.description = description;
        this.isCompleted = false;
    }
    Task.prototype.complete = function () {
        this.isCompleted = true;
    };
    Task.prototype.updateDescription = function (newDescription) {
        this.description = newDescription;
    };
    Task.prototype.getDescription = function () {
        return this.description;
    };
    Task.prototype.getId = function () {
        return this.id;
    };
    return Task;
}());
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.updateTask = function (arg0, arg1) {
        throw new Error("Method not implemented.");
    };
    TaskManager.addTask = function (arg0) {
        throw new Error("Method not implemented.");
    };
    TaskManager.prototype.addTask = function (description) {
        var id = this.tasks.length + 1;
        var task = new Task(id, description);
        this.tasks.push(task);
    };
    TaskManager.prototype.completeTask = function (id) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].getId() === id) {
                this.tasks[i].complete();
                break;
            }
        }
    };
    TaskManager.prototype.listOfCompletedTasks = function () {
        var completedTasks = [];
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].isCompleted) {
                completedTasks.push(this.tasks[i]);
            }
        }
        return completedTasks;
    };
    TaskManager.prototype.listNotCompletedTasks = function () {
        var notCompletedTasks = [];
        for (var i = 0; i < this.tasks.length; i++) {
            if (!this.tasks[i].isCompleted) {
                notCompletedTasks.push(this.tasks[i]);
            }
        }
        return notCompletedTasks;
    };
    TaskManager.prototype.getAllTasks = function () {
        return this.tasks;
    };
    TaskManager.prototype.getTaskById = function (id) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].getId() === id) {
                return this.tasks[i];
            }
        }
        return null;
    };
    TaskManager.prototype.deleteTask = function (id) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].getId() === id) {
                this.tasks.splice(i, 1);
                break;
            }
        }
    };
    return TaskManager;
}());
var manager = new TaskManager();
manager.addTask("Learn TypeScript");
manager.addTask("Build project");
console.log(manager.getAllTasks());
manager.completeTask(1);
console.log("Completed Tasks:", manager.listOfCompletedTasks());
console.log("Not Completed Tasks:", manager.listNotCompletedTasks());
manager.deleteTask(1);
console.log("All Tasks after deletion:", manager.getAllTasks());
