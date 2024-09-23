import { Test } from "@nestjs/testing";
import { TodoService } from "../../todo.service";
import { drizzleProvider } from "../../../../libs/db/drizzle/drizzle.provider";
import { repositoryProvider } from "../../../../libs/db/drizzle/provider/repository.provider";

describe("TodoService Int", () => {
  let todoService: TodoService;
  let testTodoId = 0;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [TodoService, ...drizzleProvider, ...repositoryProvider],
    }).compile();

    todoService = moduleRef.get(TodoService);
  });

  describe("createTodo()", () => {
    it("todo 생성 >> 생성 성공 시 생성된 ID를 배열에 담아 반환한다.", async () => {
      const todoId = await todoService.createTodo("title");

      expect(todoId).toBe(1);
      testTodoId = todoId;
    });

    it("todo 생성 실패 >> title은 string만 받을 수 있다. 타입이 틀릴 경우 error를 반환한다.", async () => {
      const one: any = { test: "test" };

      await expect(todoService.createTodo(one)).rejects.toThrow();
    });
  });

  describe("getTodoById()", () => {
    it("id로 todo 조회 성공 >> 조회 성공 시 해당 ID의 todo를 반환한다.", async () => {
      const todo = await todoService.getTodoById(testTodoId);

      expect(todo.title).toBe("title");
      expect(todo.isCompleted).toBe(false);
    });

    it("todo 조회 실패 >> id는 number만 받을 수 있다. 타입이 틀릴 경우 error를 반환한다.", async () => {
      const one: any = { id: "test" };

      await expect(todoService.getTodoById(one)).rejects.toThrow();
    });
  });

  describe("getTodoByTitle()", () => {
    it("title로 todo 조회 성공 >> 조회 성공 시 title 이름과 일치하는 todo를 반환한다.", async () => {
      const todo = await todoService.getTodoByTitle("title");

      expect(todo.title).toBe("title");
      expect(todo.isCompleted).toBe(false);
    });

    it("todo 조회 실패 >> title는 string만 받을 수 있다. 타입이 틀릴 경우 error를 반환한다.", async () => {
      const one: any = { title: "test" };

      await expect(todoService.getTodoByTitle(one)).rejects.toThrow();
    });
  });

  describe("executeTodo()", () => {
    it("Todo 실행 처리 성공 >> 성공 시 업데이트 된 id를 반환한다.", async () => {
      const resultTodoId = await todoService.executeTodo(testTodoId);

      expect(resultTodoId).toBe(testTodoId);
    });

    it("Todo 실행 처리 실패 >> 이미 실행 처리된 id의 경우 에러를 반환한다.", async () => {
      await expect(todoService.executeTodo(testTodoId)).rejects.toThrow();
    });

    it("Todo 실행 처리 실패 >> todo가 존재하지 않는 id의 경우 에러를 반환한다.", async () => {
      await expect(todoService.executeTodo(10000000)).rejects.toThrow();
    });
  });
});
