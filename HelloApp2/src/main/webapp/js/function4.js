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
	html += '</tr>';


	return html;
}//end of makeTr

document.getElementById('saveBtn').onclick = function(e) {  //id값으로 ele를 가져온다는의미,savebtn을 클릭하면 함수실행이라는의미

	let name = document.getElementById('name').value;
	let age = document.getElementById('age').value;
	let height = document.getElementById('height').value;
	
	if(!name || !age || !height){
		alert('값을 입력하세요');
		return; //함수 종료
	}

	const mem = new Member(name, age, height);
	let str = makeTr(mem);  //<tr>.....</tr>->tr태그를 만들어주는놈
	
	document.getElementById('list').innerHTML += str; //누적

	//입력값 초기화.
		document.getElementById('name').value =''; 
		document.getElementById('age').value =''; 
		document.getElementById('height').value =''; 
		document.getElementById('name').focus(); //촛점맞추고 기다리기 

	}
	
	//end of makeTr