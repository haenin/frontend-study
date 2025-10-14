var hello = 'hello world';
console.log(hello);

// Template Literal(템플릿 리터럴)
// 멀티라인, 변수삽입, 표현식 모두 템플릿 리터럴이라고 한다.
// 백팃(`)으로 줄바꿈되로 출력되고 여러줄이 가능
var str = `안녕하세요.
반갑습니다.`;
console.log("multiline " + str);

var lastName ="혜원";
var firstName ="최";
console.log(`제 이름은 ` + lastName + ` ` + firstName + `입니다`);
console.log("제 이름은 " + lastName + " " + firstName + "입니다");
console.log(`제 이름은 ${lastName} ${firstName} 이며, ${2 - 1}세 입니다.`);