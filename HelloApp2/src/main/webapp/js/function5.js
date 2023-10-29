//function5.js

let sum1 = 0;
[10, 20, 30].forEach(function(num) {
	sum1 += num; //consumer : 매개값을 소진,반환값은 없음	
})
console.log('forEach : ', sum1);

sum1 = 0;
sum1 = [10, 20, 30].reduce(function(acc, item, idx, ary) { //acc는 누적값이란뜻
	//console.log(acc, item, idx);
	return acc + item; //function : 매개값을 소진해서 반환값을 생성 콘슘타입이랑 차이
}, 0); //0은초기 값
console.log('reduce : ', sum1);





function sum(a = 0, b = 0, ...args) { // parameters ///...은 펼침연산자이다.args이름으로 들어오는값을 처리 몇개인지는 모름..
	console.log('12313'+args);123
	let result = 0;
	result = a + b;
	args.forEach(num => result += num); //화살표함수
	//args.forEach(function(num){ result += num}); //원래는 이런모양인데 위처럼 화살표 함수로 나타낼 수 있따.
	return result;

	//return a + b + args.reduce(function(acc,item){return (acc+item)}

	//return a + b + args.reduce((acc, item) => acc + item) //이렇게도 사용가능(화살표 함수)
}

//console.log(sum(10)); //b.c는 언디파인이 된다 고로 a+b+c는 숫자가 아니다(NaN) 그래서 초기값 a=0,b=0,c=0을 준다
console.log(sum(10, 20, 30, 40, 50, 60)); //arguments.

//reduce 연습.최대값
const numAry = [4, 2, 6, 9, 1, 7]
 //최대값 반환 두개를 비교해서
 let max = 0;
 
 max = numAry.reduce((acc,item)=>acc>item? acc: item)

 
 console.log('최대값',max);
 
 
 