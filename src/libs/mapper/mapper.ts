export class Mapper {
  static toRequired<T>(classConstructor: new (...args: any[]) => T) {
    return (args: T | undefined) => {
      if (!args) throw new Error("빈 값이 들어올 수 없습니다.");
      return new classConstructor(args);
    };
  }

  static toOptional<T>(classConstructor: new (...args: any[]) => T) {
    return (args: T | undefined) => new classConstructor(args);
  }
}
