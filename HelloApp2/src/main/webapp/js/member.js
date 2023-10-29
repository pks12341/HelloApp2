//function4.js
// 생성자 함수..Member ->member.js에 정의해둠 function.html에
function Member(name, age, height) {
	console.log(this);
	this.name = name;
	this.age = age;
	this.height = height;
	this.showInfo = function() {
		return `이름은 ${this.name}이고 나이는 ${this.age}입니다.`;
	}
}
//end of Member.



function makeTr(member) {
	let html = '';
	html += '<tr>';
	html += '<td>' + member.name + '</td>';
	html += '<td>' + member.age + '</td>';
	html += '<td>' + member.height + '</td>';
	html += '<td>' + member.showInfo() + '</td>';
	html += '<td><button onclick ="this.parentElement.parentElement.remove()">삭제</button></td>';
	html += '</tr>';
	return html;
	}