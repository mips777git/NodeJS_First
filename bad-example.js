// 이 파일에는 여러 포맷팅 문제가 있습니다!

const name = '철수'; // 세미콜론 없음, 쌍따옴표 사용, 공백 문제

function greet(userName) {
  console.log('안녕하세요, ' + userName + '님!'); // 쌍따옴표, 들여쓰기 문제
}

const numbers = [1, 2, 3, 4, 5]; // 공백 문제, 세미콜론 없음

const user = { name: '김영희', age: 25, city: '서울' }; // 쌍따옴표, 공백 문제

// 사용하지 않는 변수
const unusedVariable = '사용 안 함';

greet(name);

// 긴 줄 (80자 초과)
const longText =
  '이것은 매우 매우 매우 매우 매우 매우 긴 텍스트입니다. Prettier가 이것을 여러 줄로 나눠줄 것입니다.';

console.log(numbers);
console.log(user);
