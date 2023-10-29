//function2
console.log('function2.js')  //여기서 vis연결하는법 우클릭 open with other - externer - vis검색 - viscode원본파일 클릭
//Member member = new member()
const member = {
	name: "홍길동",
	age: 18,
	height: 178.9,
	showInfo: function() {
		return (`이름은 ${this.name} 이고 나이는 ${this.age} 입니다`)
	}

}
const member1 = {
	name: "김길동",
	age: 19,
	height: 179.9,
	showInfo: function() {
		return (`이름은 ${this.name} 이고 나이는 ${this.age} 입니다`)
	}

}
const member2 = {
	name: "박길동",
	age: 20,
	height: 180.9,
	showInfo: function() {
		return (`이름은 ${this.name} 이고 나이는 ${this.age} 입니다`)
	}
}
const members = [member,member1,member2] 

//DOM = Document object model
let show = document.getElementById('show'); //table>(thead>tr>td*2)+(tbody>tr>td*2) 이런식으로 치고 엔터..+는 형제요소라는뜻
let str = "";   //문자열 선언
//코드 작성,.,.,.,
//table>tbody>(tr>td*4)*3
str += "<table border ='1'>";
str +="<tbody>";
members.forEach(function(item){//forEach E를 대문자로 적어야 한다
    str += makeTr(item);

})
str += '</tbody>';
str += '</table>';
console.log(str);
show.innerHTML =str; 



function makeTr(member={name, age,height, showInfo}) {    // 값이 아닌 member={} 오브젝트가 오도록 한다고 이해하기 //={name, age,height, showInfo}부분은 없어도된다
    let html = '';
    html += '<tr>';
    html += '<td>'+member.name+'</td>';
    html +='<td>'+member.age+'</td>';
    html +='<td>'+member.height+'</td>';
    html +='<td>'+member.showInfo() + '</td>';
    html += '<tr>';
    return html;
}
console.log(makeTr(member));



