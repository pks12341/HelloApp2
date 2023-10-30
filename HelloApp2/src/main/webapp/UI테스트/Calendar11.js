
//makeHead()
const novemberCal = {
	show() {
		let day = '';
		day += "<table border = '1'><thead><tr>";
		let week = ['일', '월', '화', '수', '목', '금', '토'];

		week.forEach(item => {

			day += "<th>" + item + "</th>"
		});

		day += "</tr></thead>";

		//today.setDate(22);

		//makeBody()
		//function makeBody() {
		day += "<tbody><tr>";
		let styles = '';

		let realValue = 0;
		for (let i = -2; i <= 30; i++) {
			if (i <= 0) {
				realValue = '';
			}
			else {
				realValue = i;
			}

			if (i % 7 == 5) {

				day += '<td align = "right">' + realValue + '</td>'

				//styles = '';
			}
			else {
				day += '<td align = "right">' + realValue + '</td>'
			}

			if (i % 7 == 4) {
				day += '<tr>' + realValue + '</tr>'
			}


		}
		day += '</tbody></table>';
		return day;
	}
}
//makeCalendar()

document.getElementById('show').innerHTML = novemberCal.show();

		//위 두 함수 조합하여 적절하게 써서
		//makeCalendar();
