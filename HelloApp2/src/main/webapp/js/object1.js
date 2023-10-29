//object1.js


Member.prototype.setBloodType = function(bloodType) {
	this.bloodType=bloodType;

}
Member.prototype.getBloodType = function() {
	return this.bloodType;

}

const mem2 = new Member('홍길동', 22, 123.4);
mem2.setBloodType('AB');
console.log(mem2.getBloodType());


//String..자바스크립트 클래스 추가 가능(이미존재하는클래스)
String.prototype.truncate = function(){
	//문자열을 가지고와서 5글자만남기고 자르는
	console.log(this);
	return this.substring(0,5)
}
let result = "HelloWorld".truncate();
console.log(result);