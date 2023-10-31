//dom2.js

//#show>table>tbody>(tr>td:사과+td:1000) +(tr>td:복숭아+td:1500)
//+(tr>td:포도+td:2000)+(tr>td:수박+td:3000)
const fruits = [
	{ name: "사과", price: 1000,farmer : '홍길동' },
	{ name: "복숭아", price: 1500,farmer : '김민서' },
	{ name: "포도", price: 2000,farmer : '최말숙' },
	{ name: "수박", price: 3000,farmer : '김선중' }
]


//for문 사용 간단 방식
const table = document.createElement('table')
const tbody = document.createElement('tbody')
table.setAttribute('border','1')//border라는 attribute에 1 추가

//table에 tbody을 하위요소로 등록


fruits.forEach(fruit => {  //구조 모르면 console.log(fruit)넣어보기

	const tr = document.createElement('tr')

	for (let prop in fruit) {
		const td1 = document.createElement('td')
		td1.innerHTML = fruit[prop]
		tr.appendChild(td1)
	}
	tbody.appendChild(tr) //tbody에 tr을 하위요소로 등록
})
table.appendChild(tbody)
document.getElementById('show').appendChild(table)




//복잡 방식

// const table = document.createElement('table')

// table.setAttribute('border',1)

// const tbody = document.createElement('tbody')
// table.appendChild(tbody)//table에 tbody을 하위요소로 등록

// const tr = document.createElement('tr')
// fruits.forEach(fruit => {  //구조 모르면 console.log(fruit)넣어보기
// 	const tr = document.createElement('tr')

// 	const td1 = document.createElement('td')
// 	td1.innerHTML = fruit.name
// 	tr.appendChild(td1)

// 	const td2 = document.createElement('td')
// 	td2.innerHTML = fruit.price
// 	tr.appendChild(td2)
	
	

// 	tbody.appendChild(tr) //tbody에 tr을 하위요소로 등록

// })
// document.getElementById('show').appendChild(table)

