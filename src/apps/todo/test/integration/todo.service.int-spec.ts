import { Test } from "@nestjs/testing";
import { TodoService } from "../../todo.service";
import { drizzleProvider } from "../../../../libs/db/drizzle/drizzle.provider";
import { repositoryProvider } from "../../../../libs/db/drizzle/provider/repository.provider";

describe("TodoService Int", () => {
  let todoService: TodoService;
  let todoId = 0;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [TodoService, ...drizzleProvider, ...repositoryProvider],
    }).compile();

    todoService = moduleRef.get(TodoService);
  });

  describe("createTodo()", () => {
    it("todo 생성 >> 생성 성공 시 생성된 ID를 배열에 담아 반환한다.", async () => {
      const todoIdList = await todoService.createTodo("title");

      expect(todoIdList).toHaveLength(1);
      todoId = todoIdList[0];
    });

    it("todo 생성 실패 >> title은 string만 받을 수 있다. 타입이 틀릴 경우 error를 반환한다.", async () => {
      const one: any = { test: "test" };

      await expect(todoService.createTodo(one)).rejects.toThrow();
    });
  });

  describe("getTodoById()", () => {
    it("id로 todo 조회 성공 >> 조회 성공 시 해당 ID의 todo를 반환한다.", async () => {
      const todo = await todoService.getTodoById(todoId);

      expect(todo.title).toBe("title");
      expect(todo.isComplete).toBe(false);
    });
  });
});
