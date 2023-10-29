//array3.js
let pos = "Hello, World".indexOf(".") //콤마 위치찾기 없으면 -1반환

let names = ["콘", "무지", "라이언", "어피치"]
pos = names.indexOf("무지"); //무지가 몇번째 위치인지 확인
if (pos == -1) {
	console.log("없는 이름입니다.")
} else {
	console.log("무지는 " + ((pos) + 1) + "번째 위치에 있습니다.")
}

//{name : "", age:20}
let members = [
	{ name: "김민식", age: 22 },
	{ name: "최민식", age: 23 },
	{ name: "김우현", age: 26 }
]
// console.log(members)    //=>민식찾기방법1
// //민식찾기
// let search = "민식"
// let cnt = 0;
// for (let a of members) {
// 	let index = a.name.indexOf(search)
// 	if (index > 0) {
// 		cnt++
// 	}
// }
// console.log(search + "은(는) :" + cnt + "명")


let search1 = "민식"
let cnt1 = 0;
members.forEach(member => {  //3번 반복하는데 member라는 변수를통해 이름을 가져온다

	if(member.name.indexOf(search1) > -1){
		cnt1++
	}
})
console.log(search1+" "+cnt1+"명이 있습니다")




