//object5.js : 객체

const obj11 = {  //홍,20을 가진 주소값이 obj1(참조변수)
	name: "Hong",
	age: 20,
	weight: 66.8
	//bloodType
}
console.log(obj11);


const obj33 = obj11;
const obj22 = Object.assign(
	{ name: "Hwang", age: 22, height: 123.4 }, obj11)

const obj44 = Object.create(obj11)
//상속을 통해서 자식객체를 생성하면 부모객체를 참조..


obj44.name = "kim"//자식속성이 변경되면 부모값과 다른값
obj44.age = "23"//자식속성이 변경되면 부모값과 다른값

obj11.name = "Hwnag"
console.log(obj44)
console.log(obj44.name)
console.log(obj44.age)

//객체의 속성을 정의.객체의 속성기술자.
//obj1.bloodType = "C";
Object.defineProperty(obj11, 'bloodType', {
	set: function(bt) {
		if (bt == "A" || bt == "B" || bt == "AB" || bt == "O") {
	this._bloodType = bt;
		}else{
			console.log('잘못된 유형입니다')
			this._bloodType = 'A'; //A형을 기본값으로 넣기 _안넣으면 무한호출
		}
	},
	get: function(){
		return this._bloodType;
	}
});
obj11.bloodType = "AB" //set
console.log(obj11.bloodType);//get.

//속성정의 시 속성값과 this 객체의 속성을 달리하는 이유는???
//객체의 속성 정의 시 get/set을 어디서확인하는지




