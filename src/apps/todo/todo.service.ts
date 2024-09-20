import { Inject, Injectable } from "@nestjs/common";
import { ITodoRepository } from "./interface/todo.repository.interface";
import { RepositoryToken } from "../../libs/db/drizzle/provider/repository.token";

@Injectable()
export class TodoService {
  constructor(
    @Inject(RepositoryToken.TODO_REPOSITORY)
    private readonly todoRepository: ITodoRepository,
  ) {}

  public async createTodo(title: string): Promise<number[]> {
    return this.todoRepository.creteTodo(title);
  }

  public async getTodoById(id: number) {
    return await this.todoRepository.findOneById(id);
  }
}
