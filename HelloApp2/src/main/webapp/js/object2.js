//object2.js
const Students = [
	{ sno: '001', sname : "최해주", engScore: 80, mathScore: 85 },
	{ sno: '002', sname : "김채민", engScore: 82, mathScore: 83 },
	{ sno: '003', sname : "최다예", engScore: 84, mathScore: 88 },
	
]

const member = new Member();



member.showPage(document.getElementById('show'),member.makeHtml(Students));