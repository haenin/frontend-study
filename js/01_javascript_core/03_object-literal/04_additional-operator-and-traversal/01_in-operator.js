var sym = Symbol('심볼');

var student = {
    name: '유관순',
    age: 15,
    test: undefined   
};

student[sym] = '추가';;
console.log(student);

// 해당 객체에 해당 프로퍼티 키 값이 있는지 확인해서 boolean을 남김
// true false 로 반환
console.log('name' in student); // true
console.log('age' in student);  // true
console.log('test' in student); // true

// for-in문: 객체가 가진 프로퍼티 키 값들을 순회하며 변수에 담아서 반복
for(var key in student) {
    console.log(`key: ${key}`);
    console.log(`value: ${student[key]}`);
    // console.log(`value: ${student.key}`); // undefined
    console.log(`<td>key: ${key}</td>`);
} // Symbol타입은 나오지 않는다 -> 숨겨진 프로퍼티

