//string2.js
const words = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate mollitia praesentium delectus beatae alias, sequi dolor facere eum maiores, placeat voluptas nam nemo accusantium error excepturi dolorem similique rem. Pariatur?'
//1.공백을기준으로 가져온 단어의 크기가 5보다 큰(초과) 문장을 콘솔에 출력
let str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate mollitia praesentium delectus beatae alias, sequi dolor facere eum maiores, placeat voluptas nam nemo accusantium error excepturi dolorem similique rem. Pariatur?'
let words1 = str.split(' ');
for (let i = 0; i < words1.length; i++) {
	if (words1[i].length > 5) {
		console.log(words1[i])
	}
};
//2.생년월일 입력 ==> 남자/여자,
//950305 1123451, 9503051123451(공백없이),950305-1123451,  이렇게 여러형태로 값이 들어오는거 상관없이 남자여자찾기

let ssn = '950305-2123451';
let stra = '950305-1123451';
let ssn1 = stra.split(',')
console.log('a : ', ssn1)
function checkGender(ssn1) {

	let joinSsn = ssn.split(' ').filter(obj => obj != '').join('');
	if (joinSsn.includes('-')) {
		joinSsn = joinSsn.replace('-', '')
	}

	if (joinSsn[6] == '1' || joinSsn[6] == '3') {
		return "남자"
	}
	else if (joinSsn[6] =='2' || joinSsn[6] == '4') {
		return "여자";
	} else {
		return '잘못된정보';

	}


}

console.log(checkGender(ssn));

//3.파일명과 파일의 확장자.
//let file = "d:/temp/sample/book.xls"; //뒤에서부터 찾기?앞에는ㄱ ㅏ변적일수있다 가정
//let fileName, fileExt; //파일명과확장자...
let file = "d:/temp/sample/book.xls";
let fileName,fileExt
let a = file.split('.')
console.log(a)
fileExt=a[1]
console.log('확장자' , fileExt)

let b = a[0].split('/')
console.log(b)
fileName = b[b.length-1]
console.log('파일명 ',fileName)

console.log(fileName+","+fileExt)
//	let fileName, fileExt;

