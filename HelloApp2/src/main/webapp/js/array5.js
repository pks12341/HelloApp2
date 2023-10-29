//array5.js

const arr1 = ['펭수', '라이언', '어피치', '콘', '무지'] //문자도 대소비교가 가능하다? 펭수<라이언 이런식으
arr1.sort(function(a, b) {
	if (a < b) {
		return -1   //오름차순
	} else {
		return 1
	}
})
console.log(arr1); //배열 자체를 변경

const arr2 = [4, 8, 1, 12, 23, 9]
arr2.sort(function(a, b) {
	if (a < b) {
		return -1   //오름차순
	} else {
		return 1
	}
})

console.log(arr2);

const json =
	`[{"id":1,"first_name":"Dorolisa","email":"dadin0@reference.com"},
{"id":2,"first_name":"Morena","email":"modlin1@nature.com"},
{"id":8,"first_name":"Dael","email":"dciotti7@wp.com"},
{"id":9,"first_name":"Bertrando","email":"bdebenedetti8@shinystat.com"},
{"id":10,"first_name":"Nikola","email":"ngladman9@uiuc.edu"}]`
let members = JSON.parse(json)
members.sort(function(a, b) {
	if (a.first_name < b.first_name)
		return -1
	else
		return 1
}).reverse(); //역순

console.log(members)






