//function3.js

function Member(name, age, height,) {
	console.log(this);
	this.name = name;
	this.age = age;
	this.height = height;
	this.showInfo = function() {
		return `이름은 ${this.name}이고 나이는 ${this.age}입니다.`;
	}
}
var myName = 'Hong'; //전역변수
const member = new Member('홍길동', 20, 123.4);
console.log(member.showInfo());
//객체를 만드는 여러가지 방법..
const members = [
	new Member('홍길동', 18, 123.3),
	new Member('김길동', 19, 124.3),
	new Member('박길동', 18, 125.3)
]
//함수 : table 생성
function makeTable(memberAry = []) {
	let str = "";
	str += "<table border = '1'>";
	str += "<tbody>";

	memberAry.forEach(function(item) {
		str += makeTr(item)
	});
	str += "</tbody>";
	str += "</table>";
	document.getElementById('show').innerHTML = str;

	function makeTr(member){
		let html = '';
		html += '<tr>';
		html += '<td>'+member.name+'</td>';
		html +=	'<td>'+member.age+'</td>';
		html +=	'<td>'+member.height+'</td>';
		html +=	'<td>'+member.showInfo()+'</td>';
		html += '</tr>';
		return html;
	}//end of makeTr
	
//end of makeTable
}
makeTable(members);
//makeTr(member)-->mekeTr은 저 안에서만 사용가능




















//다른방식?

//show.innerHTML = str;

//function makeTable(memberAry = []) {
//	let str = "";
//	str += "<table border = '1'>";
//	str += "<tbody>";

//	members.forEach(function(item) {
//		str += '<tr>';
//		str += '<td>' + item.name + '</td>'
//		str += '<td>' + item.age + '</td>'
//		str += '<td>' + item.height + '</td>'
//		str += '</tr>';

//	}
//	);
//	str += "</tbody>";
//	str += "</table>";

//}
//makeTable(members);
//let show = document.getElementById('show').innerHTML = str;
//show.innerHTML = str;




