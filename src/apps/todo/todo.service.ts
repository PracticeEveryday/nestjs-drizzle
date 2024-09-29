import { Inject, Injectable } from '@nestjs/common';

import { RepositoryToken } from '@DB/drizzle/provider/repository.token';

import { TodoDomain } from './domain/todo.domain';
import { ITodoRepository } from './interface/todo.repository.interface';

@Injectable()
export class TodoService {
    constructor(
        @Inject(RepositoryToken.TODO_REPOSITORY)
        private readonly todoRepository: ITodoRepository,
    ) {}

    public async createTodo(title: string): Promise<number> {
        return this.todoRepository.creteTodo(title);
    }

    public async getTodoById(id: number): Promise<TodoDomain> {
        return await this.todoRepository.findOneById(id);
    }

    public async getTodoByTitle(title: string): Promise<TodoDomain> {
        return await this.todoRepository.findOneByTitle(title);
    }

    public async executeTodo(id: number): Promise<number> {
        const todo = await this.todoRepository.findOneById(id);

        if (todo.isCompleted) {
            throw new Error(`이미 실행된 ${todo.title}입니다.`);
        }

        const todoId = await this.todoRepository.executeTodo(todo);

        if (todoId !== todo.id) {
            throw new Error('업데이트 된 내역이 없습니다.');
        }

        return todoId;
    }

    public async deleteTodoById(id: number) {
        const todo = await this.todoRepository.findOneById(id);

        return await this.todoRepository.deleteOneById(todo);
    }
}
