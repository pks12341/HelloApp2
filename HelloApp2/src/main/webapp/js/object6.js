//Map,Set 
const map = new Map();
map.set("홍길동", 80)
map.set("김길동", 85)
map.set("김길동", 90) //기존의 값85를 90으로 변경

//map.delete("김길동"); //김길동삭제

const refval = [12];
map.set(refval, 88);
console.log(map.get(refval))

console.log(map.get("홍길동"));
for (let ent of map.entries()) { //키와 값을 반환 배열타입으로..entries 기억..
	console.log('이름 : ', ent[0], ', 점수 : ', ent[1]);
}

map.forEach(function(val, key, map) {
	if (key == "홍길동")
		console.log(val, key, map);
})

//맵 <-->배열
const ary = [['프로도', 3], ['라이언', 5], ['어피치', 4]];
const fmap = new Map(ary); //배열타입을 맵타입으로 변경 //Map(생성자 : 배열)
for (let ent of fmap.entries()) {
	console.log('키 : ', ent[0], '값 : ', ent[1]);
}

const entries = fmap.entries();
console.log(entries); //entries : MapIterator 타입.
console.log(Array.from(fmap))//맵 ->배열로 전환

console.clear();
//Set :중복된 값은 허용X
const set1 = new Set();
set1.add("라이언");
set1.add("프로도");
//set1.add("어피치")
//set1.add("어피치")
set1.add(["어피치",4 ]);
set1.add(["어피치",4 ]);//문자열 같은게 2개있으면 중복안됐는데 []로하면 사이즈 4로나옴

console.log(set1.size) //크기가 3으로 나옴
set1.forEach(function(val, item, set) {
	console.log(val, item, set);
})
//셋 <--> 배열.
const setAry = ['라이언','프로도','무지','무지']
const set2 = new Set(setAry);
console.log(set2.size); // 3 나옴

console.log(Array.from(set2)); //셋 -> 배열










