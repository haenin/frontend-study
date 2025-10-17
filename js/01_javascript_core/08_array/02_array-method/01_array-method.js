const foodList = ['물회', '삼계탕', '냉면', '수박', '물회'];

// 중복되는 요소가 있으면 좌측부터
console.log(`foodList.indexOf('물회'): ${foodList.indexOf('물회')}`); // foodList.indexOf('물회'): 0
console.log(`foodList.indexOf('삼계탕'): ${foodList.indexOf('삼계탕')}`); // foodList.indexOf('물회'): 0

console.log(`foodList.includes('물회'): ${foodList.includes('물회')}`); // foodList.includes('물회'): true
console.log(`foodList.includess('삼계탕'): ${foodList.includes('삼계탕')}`); // foodList.includess('삼계탕'): true


const chineseFood = ['짜장면', '짬뽕', '탕수육'];
/* 마지막 요소로 추가 */
chineseFood.push('팔보채');
chineseFood.push('양장피');
console.log('push후 chineseFood:',chineseFood); // push후 chineseFood: [ '짜장면', '짬뽕', '탕수육', '팔보채', '양장피' ]

/* 마지막 요소를 제거 */
console.log(`chineseFood.pop(): ${chineseFood.pop()}`); // chineseFood.pop(): 양장피
console.log(`chineseFood.pop(): ${chineseFood.pop()}`); // chineseFood.pop(): 팔보채
console.log('pop후 chineseFood:',chineseFood); // pop후 chineseFood: [ '짜장면', '짬뽕', '탕수육' ]

const chickenList = ['양념치킨', '후라이드', ' 파닭'];
/* 처음 요소로 추가 */
console.log('chickenList.unshift()',chickenList.unshift('간장치킨')); // chickenList.unshift() 4
console.log('chickenList.unshift()',chickenList.unshift('마늘치킨')); // chickenList.unshift() 5
console.log('chickenList unshift후:',chickenList); // chickenList unshift후: [ '마늘치킨', '간장치킨', '양념치킨', '후라이드', ' 파닭' ]

/* 처음 요소로 제거 */
console.log('chickenList.shift()',chickenList.shift()); // chickenList.shift() 마늘치킨
console.log('chickenList.shift()',chickenList.shift()); // chickenList.shift() 간장치킨
console.log('chickenList shift후:',chickenList); // chickenList shift후: [ '양념치킨', '후라이드', ' 파닭' ]

/* concat */
const idol1 = ['서태지와 아이들', '소녀시대'];
const idol2 = ['HOT', '잭스키스'];
const idol3 = ['핑클', '블랙핑크'];

console.log(`idol1을 기준으로 idol2 배열 concat: ${idol1.concat(idol2)}`); // idol1을 기준으로 idol2 배열 concat: 서태지와 아이들,소녀시대,HOT,잭스키스

/* ES6에서 스프레드 연산자를 통해 concat의 개념을 할 수 도 있다.(이후 배움) */
console.log(`idol1을 기준으로 idol2 배열 concat(spread)): ${[...idol1, ...idol2]}`); // idol1을 기준으로 idol2 배열 concat: 서태지와 아이들,소녀시대,HOT,잭스키스
console.log(...idol1); // 서태지와 아이들 소녀시대

console.log(`idol3을 기준으로 idol1, idol2를 concat: ${idol3.concat(idol1, idol2)}`);
// idol3을 기준으로 idol1, idol2를 concat: 핑클,블랙핑크,서태지와 아이들,소녀시대,HOT,잭스키스
console.log(`idol3을 기준으로 idol1, idol2를 concat(spread): ${[idol3,idol1, idol2]}`);
// idol3을 기준으로 idol1, idol2를 concat: 핑클,블랙핑크,서태지와 아이들,소녀시대,HOT,잭스키스

/* slice(선택한 요소 복사) / splice(선택한 인데스 위치 요소 제거 및 추가) */
const front = ['HTML', 'CSS', 'JavaScript', 'Vue'];

// 1 ~ 2(3-1) 인덱스 까지 복사
console.log('front.slice():',front.slice(1, 3)); // front.slice(): [ 'CSS', 'JavaScript' ]
console.log('front:',front); // front: [ 'HTML', 'CSS', 'JavaScript', 'Vue' ]

// 2번 인덱스 부터 2길이만큼 치환
console.log('front.splice(): ',front.splice(2, 2, 'React')); // front.splice():  [ 'JavaScript', 'Vue' ]
console.log('front: ',front); // front:  [ 'HTML', 'CSS', 'React' ]

/* join(배열에 담긴 배열의 요소들을 구분자로 포함한 하나의 문자열로 반환) */
const snackList = ['사탕', '초콜렛', '껌', '마이쮸'];
console.log('snackList.join():',snackList.join()); // snackList.join(): 사탕,초콜렛,껌,마이쮸
console.log("snackList.join('/'):",snackList.join('/')); // snackList.join('/'): 사탕/초콜렛/껌/마이쮸