import { Test, TestingModule } from "@nestjs/testing";
import { LoggerService } from "./logger.service";

describe("LoggerService", () => {
  let service: LoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggerService],
    }).compile();

    service = module.get<LoggerService>(LoggerService);

    // 각 console 메서드를 감시하기 위해 spyOn을 사용
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "debug").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "info").mockImplementation(() => {});
  });

  afterEach(() => {
    // 모든 mock을 초기화
    jest.clearAllMocks();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("log() 테스트", () => {
    const message = "Test log message";
    service.log(message);

    expect(console.log).toHaveBeenCalledWith("🪵 Test log message");
  });

  it("log() 테스트 With Parameter", () => {
    const message = "Test log message";
    service.log(message, { a: "a" });

    expect(console.log).toHaveBeenCalledWith("🪵 Test log message", { a: "a" });
  });

  it("error() 테스트", () => {
    const message = "Test error message";
    service.error(message);

    expect(console.error).toHaveBeenCalledWith("💥 Test error message");
  });

  it("debug() 테스트", () => {
    const message = "Test debug message";
    service.debug(message);

    expect(console.debug).toHaveBeenCalledWith("🐛 Test debug message");
  });

  it("warn() 테스트", () => {
    const message = "Test warn message";
    service.warn(message);

    expect(console.warn).toHaveBeenCalledWith("🚨 Test warn message");
  });

  it("info() 테스트", () => {
    const message = "Test info message";
    service.info(message);

    expect(console.info).toHaveBeenCalledWith("🪵 Test info message");
  });
});
