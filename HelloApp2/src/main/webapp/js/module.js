//module.js
import { friendInfo } from './friend.js';
import { cal } from '../todo/CalendarPJ.js'


const friend = {
	name: "Hwang",
	phone: "010-3333-4444",
	address: "대구 중구 200",
	showInfo: function() {
		return `${this.name}`;
	}
}
console.log(friend.showInfo())

console.log(friendInfo(friend))

cal.showCalendar();