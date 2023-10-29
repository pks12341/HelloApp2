//obj4.js
//이방법 사용하기..가장 좋을듯..

const obj = {
	sno: 1001,
	sname: '홍길동',
	address: '대구 중구 100번지',
	friends: [
		{ name: '김민수', phone: '010-1111' },
		{ name: '최현수', phone: '010-2222' },

	],
	hobbies: [
		'독서', '영화보기', '여행', '요리'
	]
}
obj.addFriend = function(friend){
	this.friends.push(friend) //배열추가
}
obj.addFriend({name : '박현수',phone : '010-4444'})


obj.pets = ['고양이','멍멍이','멧돼지']
console.log(obj.pets[2]) //멧돼지 출력
obj.pets[2] = '붕어';
console.log(obj.pets[2]) //붕어출력

console.log('이름 :', obj['sname']);
console.log('주소 :', obj.address);
console.log('친구는 ', obj.friends.length, '명입니다');
console.log('첫번째 친구 이름 : ', obj['friends'][0].name);
obj['friends'][1]['phone'] = '010-3333' //연락처변경
console.log('두번째 친구 연락처 : ', obj['friends'][1]['phone']);//.붙여도되고 이렇게해도되고

obj.hobbies.forEach(hobby => console.log(hobby));
