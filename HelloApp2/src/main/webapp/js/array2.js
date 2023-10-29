//array2.js : MOCK_DATA.json 파일의 데이터 활용

const json =
	`[{"id":1,"first_name":"Dorolisa","email":"dadin0@reference.com"},
{"id":2,"first_name":"Morena","email":"modlin1@nature.com"},
{"id":3,"first_name":"Nolana","email":"nsmees2@webmd.com"},
{"id":4,"first_name":"Velvet","email":"vpettecrew3@rediff.com"},
{"id":5,"first_name":"Collen","email":"cmatthius4@cam.ac.uk"},
{"id":6,"first_name":"Rheta","email":"rheffernan5@canalblog.com"},
{"id":7,"first_name":"Christian","email":"cwimbush6@irs.gov"},
{"id":8,"first_name":"Dael","email":"dciotti7@wp.com"},
{"id":9,"first_name":"Bertrando","email":"bdebenedetti8@shinystat.com"},
{"id":10,"first_name":"Nikola","email":"ngladman9@uiuc.edu"}]
`; //json ->  object.JSON.parse() 사용.
let members = JSON.parse(json) //문자열값을 넣어줌
console.log(members)

let delMember = "Collen"; //5번째사람
let yourinfo = { name: "Hong", email: "hong@email.com" }
members.forEach((member, idx) => {
	if (member.first_name == delMember) {
		members.splice(idx, 1, { id: member.id, first_name: yourinfo.name, email: yourinfo.email })
	}
})
//console.log(members);


let inpVal = prompt("이름과 이메일 입력하세요 예) 홍길동, hong@email.com")
console.log(inpVal); //=>사용자가 입력한값이 문자열로

let nameE = inpVal.split(',');
let nid = members[members.length -1].id+1;
let newMember = {id : nid, first_name : nameE[0], email : nameE[1].trim()} //trim은 공백제거

//배열에 추가하기
members.push(newMember)
//members.splice(members.length.0,newMember)//splice사용시
console.log(members)


//console.log(nameE); 
//members.splice(members.length + 1, 0, { id: members.length + 1, first_name: nameE[0], email: nameE[1] });=> 내가한것
//console.log(members);

const dupAry = [["라이언",5],["어피치",3],["콘",2],["무지",3]]
console.log(dupAry)
console.table(dupAry)
