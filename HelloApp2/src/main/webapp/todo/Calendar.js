

// const today = new Date(); //오늘날짜를 생성
// console.log('오늘날짜 : ', today.getDate());
// function makeBody() {
// 	let tbody = '</tr></thead><tbody><tr>'
// 	for (let i=1; i <= 31; i++) {
// 		//오늘날짜는 백그라운드 : 노란색, 폰드굵기를 bold로
// 		if (i % 7 == 1) //일요일이면 빨간색
// 			tbody += '<td style = "color:red;" align = "right">'+i+'</td>'
	
// 	else{
// 	tbody += '<td align = "right">' + i + '</td>'

// }
// if (i % 7 == 0)
// 	tbody += '<td aligh ="right">' + i + '</td>'



//makeHead()
function makeHead() {
	let day = '';
	day += "<table border = '1'><thead><tr>";
	let week = ['일', '월', '화', '수', '목', '금', '토'];

	week.forEach(item => {

		day += "<th>" + item + "</th>"
	});

	day += "</tr></thead>";
	const today = new Date(); 
	//today.setDate(22);
	
	//makeBody()
	//function makeBody() {
	day += "<tbody><tr>";
	let styles = '';
	
	for (let i = 1; i <= 31; i++) {
		if (i % 7 == 1) {
		//	styles += 'font-weight : bold; background : yellow'
			//styles = 'background:red; color:yellow;';

			// let idClass = "class='sunday'";

			if(i == today.getDate()){
				day += '<td class="sunday" id="today">' + i + '</td>'
			}
			else {
				day += '<td class="sunday">' + i + '</td>'
			}
			//styles = '';
		}
		else {
			day += '<td align = "right">' + i + '</td>'
		}

		if (i % 7 == 0) {
			day += '<tr></tr>'
		}

	}
	day += '</tbody></table>';
	return day;
}

//makeCalendar()

document.getElementById('show').innerHTML = makeHead();

		//위 두 함수 조합하여 적절하게 써서
		//makeCalendar();
