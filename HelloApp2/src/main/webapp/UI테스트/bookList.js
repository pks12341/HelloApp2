/**
 * 
 */

const xhtp = new XMLHttpRequest();
xhtp.open('get', '../BookListServ')
xhtp.send();
xhtp.onload = function() {
	console.log(xhtp.responseText);
	//사용자 입력값 : retCode = OK => {vo : mid, pass,name,phone}
	//tr 생성해서 td생성. 화면출력. id = "list"의 innerHTML 속성활용.
	//retCode = NG => alert('처리중 에러')
	
	let json = JSON.parse(xhtp.responseText);
	let result = '';
	json.forEach((obj) => {
		result += makeTr(obj);
	})
	
	document.getElementById('list').innerHTML += result;
}

function makeTr(book) {   
    let html = '';
    html += '<tr>';
    html += '<td>'+book.book_code+'</td>';
    html +='<td>'+book.book_title+'</td>';
    html +='<td>'+book.book_author+'</td>';
    html +='<td>'+book.book_press+'</td>';
    html +='<td>'+book.book_price+'</td>';
    html +='<td><button>삭제</button></td>'
    html += '<tr>';
    return html;
}


