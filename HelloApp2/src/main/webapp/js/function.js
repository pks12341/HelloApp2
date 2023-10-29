//function

//함수 선언
		//function myFunc(std, score = 60) { //let score 등 할필요없다 변수이름만.., 60을 초기값으로 쓸수도 있다.//	myFunc('홍길동'); 홍길동 뒤에 아무것도 없으면 60을 쓴다

		//	if (score == undefined) {
		//		score = 0;
		//	}
		//	console.log(`${std} 점수는 ${score}`);
		//	return score; // 리턴이 있으면 반환, 없으면 undefined
		//}

		//함수표현식(위처럼 해도되고 밑처럼 해도된다)

		var myFunc = function myFunc(std, score = 60) {

			//	if (score == undefined) {
			//		score = 0;
			//	}
			console.log(`${std} 점수는 ${score}`);
			return score; // 리턴이 있으면 반환, 없으면 undefined
		}

		//	let myFunc = myFunc('홍길동');
		console.log(myFunc('홍길동'));  //함수안 80은 매개값이라 부른다 function(score)의 score는 매개변수