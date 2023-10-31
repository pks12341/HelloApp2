//fetch1.js

import { table } from './ajaxModule.js';

fetch('../MemberListServ2') //fetch -then -then - catch 패턴기억
	.then((resolve) => {
		console.log(resolve);
		return resolve.json(); // json문자열을 -> object(객체)타입으로 변환시켜주는 함수

	})
	.then((result) => { //변환값을 여기롣전달
		console.log(result);
		let titles = ["회원번호", "비밀번호", "이름", "연락처"];
		let dataAry = result;

		result = table.makeTable(titles, dataAry);
		document.getElementById('show').innerHTML += result;
		
	})
	.catch((err) => {
		console.log('error =>', err);
	})