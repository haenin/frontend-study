/* 1.배열 리터럴을 통해 배열 생성 */
const arr = ['바나나', '복숭아', '키위'];
console.log('arr',arr);
console.log('arr.length: ',arr.length);

/* 2. 배열 빌트인 생성자 함수 */
const arr2 = Array();
console.log(arr2); // []
console.log(arr2.length); // 0

const arr3 = Array(10);
console.log(arr3); // [ <10 empty items> ]
console.log(arr3.length); // 10

const arr4 = Array(1, 2, 3); 
console.log(arr4); // [ 1, 2, 3 ]
console.log(arr4.length); // 3

/* length라는 프로퍼티를 활용해 for문을 돌릴 수 있다. */
for(let i = 0; i < arr.length ; i++){
    console.log(arr[i]);
}