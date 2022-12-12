import { ToDo as ToDoDto } from '../dtos/ToDo';

export class ToDo {
    static getAll() {
        return new Promise<ToDoDto[]>((resolve) => {
            setTimeout(() => {
                const result: ToDoDto[] = [
                    { id: 2312, userId: 1, title: 'Hello world 1!' },
                    { id: 4131, userId: 1, title: 'Hello world 2!' },
                    { id: 7463, userId: 1, title: 'Hello world 3!' },
                    { id: 4267, userId: 1, title: 'Hello world 4!' }
                ];
            }, 2345);
        });
    }

    static create() {}

    static edit() {}

    static remove() {}
}