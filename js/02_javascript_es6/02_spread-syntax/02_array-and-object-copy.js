/* 스프레드 문법을 활용한 배열 및 객체 복사 */

/* 1. 배열 복사(깊은 복사) */
let arr = [10, 40, 80];
let arrCopy = [...arr];

console.log(arr);
console.log(arrCopy);
console.log(arr == arrCopy); // false 
console.log(arr === arrCopy); // false -> 동일 배열 x

/* 2. 객체 복사 */
let obj = {
    name: '홍길동',
    age: 20,
    addr: '서울',
    hobbies: ['축구', '농구']
};

let objCopy = {...obj}; // 객체의 프로퍼티 전개

console.log(obj); 
console.log(objCopy); 
console.log(arr == arrCopy); // false 
console.log(arr === arrCopy); // false 

/* 객체만 복사하고 내부 배열은 따로 복사하지 않았을 경우 */
console.log(obj.hobbies);
console.log(objCopy.hobbies);
// 사본을 가지고 추가했는데 원본에도 추가된 모습
// 배열은 복사가 안되었기 때문이다. (문제점)
objCopy.hobbies.unshift('야구');
console.log(obj.hobbies);

console.log(obj.hobbies === objCopy.hobbies); // true

/* 
    내부 배열도 복사 했을 경우
    복사하는 객체 내부에 이와 같이 추가적인 객체(또는 배열)이 있다면
    추가적으로 복사해 주어야 정확한 의미의 사본(깊은 복사)이 만들어진다.
*/
objCopy.hobbies = [...obj.hobbies];

console.log(obj.hobbies === objCopy.hobbies); // false -> 취미 사본 복제 완료

// depth를 3이하.. 로 프론트에게 주어야 json이 가벼움

/* 기존에 존재하는 객체 및 변수를 활용해서 새로운 객체를 만들 수 있다. */
// obj에 프로퍼티 키로 존재하지 않는 변수명은 추가되고
let classNum = 30; // 추가되고
// obj에 프로퍼티 키로 존재하면 해당 변수값으로 수정됨
let name = '강감찬'; // 프로퍼티 값이 덮어짐

let newObj = {classNum, ...obj, name};
// let newObj = {classNum, name, ...obj}; // 이거는 name이 수정안됌
                                        // 수정해야할 프로퍼티 변수는 해당 객체 뒤에 작성할 것(순서에 유의)

console.log(newObj);