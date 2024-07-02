export class Todo{
    userId: number;
    id: number;
    title: string;
    completed: string;
    constructor(userId: number, id: number, title: string, completed: string){
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}

export default Todo;