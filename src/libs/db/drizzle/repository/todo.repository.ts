import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { MySql2Database } from 'drizzle-orm/mysql2';

import { TodoDomain } from '@TODO/domain/todo.domain';
import { TTodoProps } from '@TODO/interface/todo.interface';
import { ITodoRepository } from '@TODO/interface/todo.repository.interface';

import { Mapper } from '../../../mapper/mapper';
import { MYSQL_CONNECTION } from '../drizzle.provider';
import * as schema from '../schema';

@Injectable()
export class TodoRepository implements ITodoRepository {
    constructor(
        @Inject(MYSQL_CONNECTION)
        private readonly db: MySql2Database<typeof schema>,
    ) {}

    public async creteTodo(title: string): Promise<number> {
        const newTodo = await this.db.insert(schema.todo).values({ title });

        return newTodo[0].insertId;
    }

    public async findOneById(id: number): Promise<TodoDomain> {
        const todo = await this.db.query.todo.findFirst({
            where: eq(schema.todo.id, id),
        });

        return Mapper.toRequired<TodoDomain, TTodoProps>(TodoDomain)(todo);
    }

    public async findOneByTitle(title: string): Promise<TodoDomain> {
        const todo = await this.db.query.todo.findFirst({
            where: eq(schema.todo.title, title),
        });

        return Mapper.toRequired<TodoDomain, TTodoProps>(TodoDomain)(todo);
    }

    public async executeTodo(todo: TodoDomain): Promise<number> {
        const resultSetHeader = await this.db
            .insert(schema.todo)
            .values({
                id: todo.id,
                isCompleted: true,
                title: todo.title,
            })
            .onDuplicateKeyUpdate({
                set: { isCompleted: true, title: todo.title },
            });

        return resultSetHeader[0].insertId;
    }

    public async deleteOneById(todo: TodoDomain) {
        const resultSetHeader = await this.db.delete(schema.todo).where(eq(schema.todo.id, todo.id));
        if (resultSetHeader[0].affectedRows === 1) {
            return todo.id;
        } else {
            throw new Error('삭제에 실패했습니다.');
        }
    }
}
