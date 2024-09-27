# nestjs-drizzle

[NestJs](https://nestjs.com/) 프레임워크와 [Drrizle-orm](https://orm.drizzle.team/)으로 구현한 작은 레포지토리입니다.

## 기술 스택

| 항목          | 내용                   |
|-------------|----------------------|
| **런타임**     | Nodejs(v20.9.0 LTS)  |
| **언어**      | Typescript(v5.1.3)   |
| **프레임워크**   | Nestjs(v10.0.0)      |
| **DB**      | MySQL(v8.0)          |
| **ORM**     | Drizzle-orm(v0.33.0) |
| **패키지 매니저** | yarn (v1.22.21)      |

### Test Code 
서비스 로직 검증 과정은 `통합 테스트`로 진행합니다.   
통합 테스트는 실제 데이터 베이스와 동일 환경에서 실행하기 위해 도커 컨테이너를 사용하고 있습니다.

### Test 코드 작성 컨벤션
[AAA Pattern](https://velog.io/@fkszm3/testing-unit-test%EA%B8%B0%EC%B4%88-AAA-Pattern) 사용

1. Arrange: 테스트 환경을 위한 값 정의
2. Act: 실행되는 테스트 코드 정의
3. Assert: 테스트 코드 실행 결과 확인