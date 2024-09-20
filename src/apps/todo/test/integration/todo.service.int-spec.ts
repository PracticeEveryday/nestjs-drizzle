import { Test } from "@nestjs/testing";
import { TodoService } from "../../todo.service";
import { drizzleProvider } from "../../../../libs/db/drizzle/drizzle.provider";
import { repositoryProvider } from "../../../../libs/db/drizzle/provider/repository.provider";

describe("TodoService Int", () => {
  let todoService: TodoService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [TodoService, ...drizzleProvider, ...repositoryProvider],
    }).compile();

    todoService = moduleRef.get(TodoService);
  });

  describe("createTodo()", () => {
    it("should create Todo", async () => {
      const todo = await todoService.createTodo("title");

      expect(todo).toHaveLength(1);
    });
  });
});
