//object.js
console.log('object start..');

let obj1 = {
	name: 'Hong',
	age: 20
}
//주소 참조
let obj2 = obj1;
console.log(obj1);
obj2.age = 22;
console.log(obj1); //22로 바뀐다! 주소를 바꾸는거기 때문

//복사
let obj3 = { ...obj1 } //복사(새로운객체생성)
obj3.age = 24;
console.log(obj3); //24로 바뀌지 않는다..참조일떄는 같은 객체를 바라보고있지만 이건 참조가 아니라 obj1객체값을 가지고 새로운 객체를 만든거임

//클래스..
class Member {
	constructor(name, age, height) {
		this.name = name;
		this.age = age;
		this.height = height;
	}
	setWeight(weight) {
		this.weight = weight;

	}
	getWeight() {
		return this.weight;
	}
	showInfo() {
		return `이름은 ${this.name}, 나이는 ${this.age}세 입니다.`


	}
	//학생의 정보 : 학생번호,이름,영어,수학.
	makeTr(student = { sno, sname, engScore, mathScore }) {
		//tr>td*4

		let html = "";
		html += '<tr>';
		html += '<td>' + student.sno + '</td>';
		html += '<td>' + student.sname + '</td>';
		html += '<td>' + student['engScore'] + '</td>'; //이렇게도가능
		html += '<td>' + student.mathScore + '</td>';
		/*html += '<td><button onclick="this.parentElement.parentElement></td>'*/
		html += '</tr>';
		return html;
	}
	makeHtml(studAry = []) {
		//html생성. => this.makeTr(std);
		let str = '';
		str += '<table border = "1">'
		str +='<tbody>'
		
	//	let table = '<table borer "1"><tbody>';
	//	table += studAry.reduce((acc.stud)=>acc+this.makeTr(stud))
	////let obj= this;
	//console.log('this1 :' ,this);
	////table +=studAry.reduce(function(acc,stud){
	//	console.log('this2 :' ,this); //this1,2다른거 확인 this2에서는 undefi
	////return acc+obj.makeTr(stud)},''); //function 쓰려면 이렇게
	
	//	table +='</tbody></table>'
	//	this.html = table;
		
		let thisObj = this;
		studAry.forEach(function(item) {
			console.log(item);
			str += thisObj.makeTr(item)
		})
		
		
		str += '</table>'
		str +='</tbody>'
		return str;
	}
	
	showPage(dom,str) {
		//innerHTML 속성에 html저장.
		dom.innerHTML = str;
	}
}




const mem1 = new Member('홍길동', 20, 156.7);
console.log(mem1.showInfo());
mem1.setWeight(62.5);
console.log('홍길동의 몸무게는', mem1.getWeight());










