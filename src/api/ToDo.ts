import { ToDo as ToDoDto } from '../dtos/ToDo';

export class ToDo {
    static async getAll(): Promise<ToDoDto[]> {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        
        const todos: ToDoDto[] = await response.json();

        todos.sort((a, b) => b.id > a.id ? 1 : -1);

        return todos;
    }

    static create() {}

    static edit() {}

    static remove() {}
}