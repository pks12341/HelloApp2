//string.js

let today = new Date(); //Date 내장객체..
today.getFullYear(); // 2023
today.getMonth(); //9 
today.getDate(); //26
//날짜변경
today.setFullYear(2022);
today.setMonth(9);
today.setDate(1);
today.setHours(10)



console.log(today.toISOString()) //ISO 형식의 문자열 값으로 날짜를 반환합니다. 17:34(KST)-9 = 08:34
console.log(today.toString()) //KST
console.log(today.toLocaleDateString()) //

function dateFormat(today) {
	// yyyy-MM-dd hh24:mm:ss
	return today.getFullYear() + "-" + ("0"+(today.getMonth() + 1)).slice(-2) + "-" + ("0"+today.getDate()).slice(-2) + " "
		+ today.getHours() +":"+ today.getMinutes() + ":" + today.getSeconds();

}
console.log(dateFormat(today));
