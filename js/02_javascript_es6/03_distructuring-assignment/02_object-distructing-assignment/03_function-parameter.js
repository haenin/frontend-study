let exampleProduct = {
    items: ['Coffee', 'Donut'],
    producer: '신사임당'
};

/* 객체 구조 분해 할당 X 함수 */
function displayProduct(obj) {
    console.log(obj.producer); // 신사임당
    console.log(obj.items); // {} 'Coffee', 'Donut' ]
    console.log(obj.brand) // 넘어온 객체에 brand가 없으면 추가되고 undefined가 됨
}

displayProduct(exampleProduct);

/* 객체 구조 분해 할당 O 함수  */
function displayProduct2({producer, items, brand = '엔코아'}) {
    console.log(producer); // 신사임당
    console.log(items); // [ 'Coffee', 'Donut' ]
    console.log(brand); // 객체 분해 할당에서는 기본값 세팅이 가능해서 추가되면서 기본값 세팅 // 엔코아
}

displayProduct2(exampleProduct);
