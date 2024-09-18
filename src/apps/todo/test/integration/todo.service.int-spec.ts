import { Test } from "@nestjs/testing";
import { TodoService } from "../../todo.service";
import { drizzleProvider } from "../../../../libs/db/drizzle/drizzle.provider";

describe("TodoService Int", () => {
  let todoService: TodoService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [TodoService, ...drizzleProvider],
    }).compile();

    todoService = moduleRef.get(TodoService);
  });

  describe("createTodo()", () => {
    it("should create Todo", async () => {
      const todo = await todoService.createTodo();

      expect(todo?.name).toBe("Test User");
      expect(todo?.email).toBe("test@test.com");
      expect(todo?.password).toBe("password");
    });
  });
});
