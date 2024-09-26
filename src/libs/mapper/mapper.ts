export class Mapper {
    static toRequired<T, U extends unknown[]>(classConstructor: new (...args: U) => T) {
        return (args: T | undefined) => {
            if (!args) throw new Error('빈 값이 들어올 수 없습니다.');
            return new classConstructor(...(args as unknown as U));
        };
    }

    static toOptional<T, U extends unknown[]>(classConstructor: new (...args: U) => T) {
        return (args: T | undefined) => new classConstructor(...(args as unknown as U));
    }
}
