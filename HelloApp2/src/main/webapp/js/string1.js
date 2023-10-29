//string1.js

let str1 = "Hello"; //기본 데이터 타입
let str2 = new String("Hello");

console.log(typeof str1, typeof str2) 
console.log(str1 == str2); //값만 비교
console.log(str1 === str2); //값&타입  비교..

console.log(str1.toUpperCase());
let result = " 공백 제거 합니다.   ".trim();
console.log(result, '문자갯수 : ', result.length)

//trim(), trimStart(), trimEnd()
//replace() split() slice() substring() substr()
//toString() indexOf() lastIndesOf() charAt() lncludes()
//concat(),

result = "Hello, World,NICE".replace(',','.');//첫번쨰 오는 ,하나를 .으로바꿈
console.log(result)
result = "Hello, World,NICE".replace(/,/g,'.'); //'g'lobal
//[],{},/값/  ->배열객체,키밸류객체,정규객체
console.log(result) // ->모두 점으로 바뀐다


result = "Hello, World,NICE".replace(/\s/g,'.'); //공백문자를 뜻한다. 공백을 찾아 점으로 바꾸는 의미  /\s/g,'' 이렇게하면 공백이 제거됨
console.log(result)



