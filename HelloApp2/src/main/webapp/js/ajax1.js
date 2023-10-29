//ajax1.js
//Asynchronus Javascript And XML 의 약자
//비동기와 동기
import { table } from './ajaxModule.js';



let friends = [];
setTimeout(function() {
	friends.push('홍길동')
}, 1000) //함수를 실행하는데 1000ms후 실행하라는뜻

setTimeout(function() {
	friends.push('김길동')
}, 500)

setTimeout(function() {
	friends.push('최길동')
}, 2000)

console.log(friends)
//비동기방식 = 먼저 끝나는것부터(병렬적)
//만약 웹페이지가 동기방식이라면? 시간이 너무오래걸린다


//friends.push('홍길동')
//friends.push('김길동')
//friends.push('최길동')
//console.log(friends)
//동기방식 - 코드 실행순서대로담김





// 보류..
let newMember = 
{mid:"M009",pass : "9999",name: "민식이", phone: "010-9999-9999"}
//newMember 값을 활용해서 tbody = "list" 추가.


let xhtp = new XMLHttpRequest()
xhtp.open('get', '../MemberListServ2');
xhtp.send();
xhtp.onload = loadJson;//loadJson혹은 loadXML 연결할수 있다 //()가 없다.. 온로드 됐을때 실행하라는의미에서?

function loadJson(){
	console.log(xhtp.responseText)
	let result = JSON.parse(xhtp.responseText)//json문자열=>오브젝트타입
	console.log(result);
	
}

function loadXML() {
	//console.log(xhtp.responseXML);
	let doc = xhtp.responseXML;
	let records = doc.getElementsByTagName('record')
	console.log(records);


	let titles = ["회원번호", "비밀번호", "이름", "연락처"];
	let dataAry = [];
	for (let record of records) {
		let obj = {
			mid: record.children[0].textContent, //mid.
			pass: record.children[1].textContent, //pass.
			name: record.children[2].textContent, //name.
			phone: record.children[3].textContent //phone.
		}
		dataAry.push(obj);
		
	
	}

	let result = table.makeTable(titles, dataAry);
		console.log(result);
	document.getElementById('show').innerHTML =result;
	
	
	//교수님방식 ajax실행이되고나서 추가하는 기능이 실행
	//let tr = '<tr><td>'+newMember.mid+
	//'</td><td>'+newMember.pass+
	//'</td><td>'+newMember.name+
	//'</td><td>'+newMember.phone+'</td></tr>'
	//document.getElementById('list').innerHTML +=tr
	
	let tr = table.makeTr(newMember);
	document.getElementById('list').innerHTML += tr
	
}


