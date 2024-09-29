import { Mapper } from './mapper';

class TestClass {
    value: string;

    constructor(value: string) {
        this.value = value;
    }
}

// Mapper 테스트 코드
describe('Mapper', () => {
    describe('toRequired', () => {
        it('toRequired >> 빈 값이 들어올 수 없음 >> 성공 시 객체 instance 반환', () => {
            const mapperFunc = Mapper.toRequired(TestClass);
            const result = mapperFunc('test value');

            expect(result).toBeInstanceOf(TestClass);
            expect(result.value).toBe('test value');
        });

        it('toRequired >> 빈 값이 들어올 수 없음 >> 실패시 에러 반환', () => {
            const mapperFunc = Mapper.toRequired(TestClass);

            expect(() => mapperFunc(undefined)).toThrow('빈 값이 들어올 수 없습니다.');
        });
    });
});
