export class Mapper {
    static toRequired<T, U>(classConstructor: new (param: U) => T) {
        return (val: U | undefined) => {
            if (!val) throw new Error('빈 값이 들어올 수 없습니다.');
            return new classConstructor(val);
        };
    }

    static toOptional<T>(classConstructor: new (...args: unknown[]) => T) {
        return (args: T | undefined) => new classConstructor(args);
    }
}
