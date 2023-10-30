

const cal = {
	weeks: ['일', '월', '화', '수', '목', '금', '토'],

	makeHead() {
		let headHtml = '<table border="1"><thead><tr>';

		this.weeks.forEach((obj) => {
			headHtml += '<th>' + obj + '</th>';
		});

		headHtml += '</tr></thead>';
		return headHtml;
	},

	makeBody() {
		let bodyHtml = this.makeHead();

		const today = new Date();

		bodyHtml += "<tbody>";
		// <tr>
		let idx = 1;
		for (let i = -2; i <= 30; ++i, ++idx) {
			if (idx == 5) {
				bodyHtml += "<tr>";
				bodyHtml += "<td class='sunday'>" + i + "</td>";
			}
			else if (idx == 4) {
				bodyHtml += "<td class='saturday'>" + i + "</td>";
				bodyHtml += "</tr>";
				idx = 0;
			}
			else {
				if (i != today.getDate()) {
					bodyHtml += "<td>" + i + "</td>";
				}
				else {
					bodyHtml += "<td id='today'>" + i + "</td>";
				}
			}
		}
	
		bodyHtml += "</tbody>";
		return bodyHtml;
	},

	show() {
		document.getElementById('show').innerHTML = this.makeBody();
	}
}

novemberCal.show();

