//arry4.js

const json =
	`[{"id":1,"first_name":"Dorolisa","email":"dadin0@reference.com"},
{"id":2,"first_name":"Morena","email":"modlin1@nature.com"},
{"id":8,"first_name":"Dael","email":"dciotti7@wp.com"},
{"id":9,"first_name":"Bertrando","email":"bdebenedetti8@shinystat.com"},
{"id":10,"first_name":"Nikola","email":"ngladman9@uiuc.edu"}]`
let members = JSON.parse(json)
//1 find
let result = members.find(function(item, idx, ary) { //3항연산자,if를 써도 된다
	if (item.id > 5) {
		return true;
	}
	return false;
	//return item.id >5 ; //5보다 큰것을 만족하는 것 하나만 가져옴 =>8가져옴  //3항연산자,if를 써도 된다
})

//2 filter
result = members.filter((item, idx) => {
	return item.id > 1 && idx < 3; //true 값을 반환
})

//3 reduce
result = members.reduce((acc, item, idx) => {
	if (item.id > 1 && idx < 3) {
		acc.push(item);
	}
	return acc
}, [])

// result = members.reduce((acc, item, idx) => { //=>문자열 이어붙이기..
// 	if(item.id > 1 && idx < 3){
// 		//acc.push(item);
// 		acc += item.first_name;
// 	}
// 	return acc;
// },"")

console.log(result);

//4 some,every =>true/false


result = members.some((member) => { //조건만족하는게 하나라도 있으면 true 아니면 false 만족하면 남은요소 확인X
	console.log(member)
	return member.first_name.length > 5;
})
console.log("...:", result);


result = members.every((member) => {  //3번 찾았을때 DAEL이 5자 이하이므로 false 출력, 모든 배열 요소가 조건만족시 true아니면 false
	console.log(member)
	return member.first_name.length > 5;
})
console.log(result);

//*map : A -> B
result = members.map(member => {
	let obj = { id: member.id, name: member.first_name, email: member.email, grade: 'C' }
	return obj;

})
console.log("map 출력 : ", result)






