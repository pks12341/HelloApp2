//dom1.js

const fruits = ['수박', '사과', '복숭아', '포도']

//#show>ul>li:수박.+li:사과+li.복숭아....
//createElement, appendChild, innerHTML등 사용


//교수님방식
const ul = document.createElement('ul')

fruits.forEach(fruit =>{
	const li = document.createElement('li')
	li.innerHTML = fruit //<li>수박</li>
	ul.appendChild(li) //<ul><li>수박</li></ul> 수박이 들어간다
	
	
})
document.getElementById('show').appendChild(ul)

// let ul = document.createElement('ul');
// document.getElementById('show').appendChild(ul)

// let li1 = document.createElement('li');
// li1.innerHTML = fruits[0]
// let li2 = document.createElement('li');
// li2.innerHTML = fruits[1]
// let li3 = document.createElement('li');
// li3.innerHTML = fruits[2]
// let li4 = document.createElement('li');
// li4.innerHTML = fruits[3]
// let li5 =  document.createElement('li');
// li5.innerHTML = '망고'


// document.querySelector('ul').appendChild(li1)
// document.querySelector('ul').appendChild(li2)
// document.querySelector('ul').appendChild(li3)
// document.querySelector('ul').appendChild(li4)
// document.querySelector('li:nth-of-type(3)').before(li5);




