var string1 = '안녕하세요';
var string2 = '반갑습니다.';
//var greeting = string1 + ' ' + string2;
var greeting = `${string1} ${string2}`;
console.log(greeting);
var product = {name : '도서', price: '4200원'};
//var message = '제품' + product.name + '의 가격은' + product.price + '입니다.';
var message = `제품 ${product.name}) 의 가격은 ${product.price}입니다.`;
//var multiline = '문자열 1\n 문자열2';
var multiline = `문자열 1 \n 문자열2`
var value1 = 1;
var value2 = 2;
var boolValue = false;
//var operator1= '곱셈값은 ' + (value1 + value2) +'입니다. ';
var operator1 = `곱셈값은 ${value1 * value2}입니다.`;
console.log(operator1);
//var operator2 = '블리언값은 ' +  (boolValue ? '참' : '거짓') + '입니다. ' ;
var operator2 = `불리언 값은 ${boolValue ? '참' : '거짓'}입니다.`
console.log(operator2);