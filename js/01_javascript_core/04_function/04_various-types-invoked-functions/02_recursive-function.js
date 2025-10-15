function factorial(n) {
    // 자바스크립트도 재귀함수가 사용 가능하며 탈출 조건에 유의
    if(n <= 1) return 1; // 재귀함수는 탈출조건을 잘 쓰자
    return n * factorial(n-1);
}

console.log(factorial(2)); // 2!
console.log(factorial(3)); // 3!
console.log(factorial(5)); // 5!
