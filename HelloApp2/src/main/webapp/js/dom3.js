//dom3.js
//table> (thead>tr>th*5) + (tbody>tr>td*5)*건수.
import table from './domTable.js';



let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=lfJ2znLyQ%2Btfj%2BmzgN0B6X94H%2BHcV9N9jTbagP9k1k9GS%2F7KDcNRcRcmdN%2B08IRwqdhFKgwuow7Pc%2BKGaZ%2B5lg%3D%3D'
let titles = ['센터id', '센터명', '의료원', '연락처', '위도', '경도'];

fetch(url)
	//function(resolve){return resolve.json()}를 줄인ㄷ것
	.then(resolve => resolve.json())// 변수이름 resolve는 특별한의미는없다
	.then(fetchCallback)
	.catch(err => console.log('error=> ', err));

//fetch 호출되는 함수.callback 함수. 

function fetchCallback(result) {
	let rawData = result.data; //원래데이터
	console.log(rawData[0])
	let sidoAry = []; //sidoAry에 sido 정보를 중복된 값 제거.
	rawData.forEach(center => {
		if (sidoAry.indexOf(center.sido) == -1) {//중복X일떄
			sidoAry.push(center.sido);//넣기
		}
	})
	console.log(sidoAry);
	let sidoSel = document.querySelector('#sidoList')
	sidoAry.forEach(sido => {
		let opt = document.createElement('option')
		opt.innerHTML = sido;
		sidoSel.append(opt);
	})
	//select 태그에 change이벤트 발생.
	sidoSel.addEventListener('change', changeCallback)//체인지 이벤트가 발생하면 이 함수를 실행해라 changeCallback()하면안됨
	function changeCallback(e) {
		console.log(e.target.value);
		let searchSido = e.target.value;
		//선택된 시도 값에 맞는 센터명만 출력.
		let filterAry = rawData.filter(center => center.sido == searchSido)
		genTable(filterAry);
		console.log(filterAry);
	}
	let filterAry = rawData.filter((center, idx) => idx < 10); //인덱스값이 10이하인 것만 출력해보기
	//let filterAry = rawData.filter(center => center.sido == '서울특별시')
	genTable(filterAry);
}

function genTable(rawData = [], page = 1) {
	//초기화
	//document.getElementById('show') 이렇게 해도 된다
	document.querySelector('#show').innerHTML = '';

	//	result = members.reduce((acc, item, idx) => {
	//		if (item.id > 1 && idx < 3) {
	//			acc.push(item);
	//		}
	//		return acc
	//	}, [])


	//let newCenter = {
	//	id: center.id,
	//	centerName: center.centerName.replace('코로나19 ', ''),
	//	org: center.org,
	//	phoneNumber: center.phoneNumber,
	//	lat: center.lat,
	//	lng: center.lng

	let thead = table.makeHead(titles);//헤더정보
	let mapData = rawData.reduce((acc, center, idx) => {  //map을reduce로 //id,센터명,의료원,연락처를 매핑.매핑정보출력
		let newCenter = {
			id: center.id,
			centerName: center.centerName.replace('코로나19 ', ''),
			org: center.org,
			phoneNumber: center.phoneNumber,
			lat: center.lat,
			lng: center.lng
		}
		acc.push(newCenter)

		return acc;
	}, []);


	let tbody = table.makeBody(mapData); //[{},{},{}....{}]
	let tbl = document.createElement('table');
	tbl.setAttribute('border', '1');
	tbl.append(thead, tbody)
	document.querySelector('#show').append(tbl);

	//tr클릭이벤트 등록
	let targetTr = document.querySelectorAll('tbody tr') //그냥tr하면 thead도 포함이다
	targetTr.forEach(tr => {
		tr.addEventListener('click', function(e) {
			//console.log(tr);
			//console.log(tr.children[4].innerHTML, tr.children[5].innerHTML)//위경도 가져오기
			let lat = tr.children[4].innerHTML
			let lng = tr.children[5].innerHTML
			//location.href = 'daumapi.html?x='+lat+'&y='+lng;
			window.open('daumapi.html?x=' + lat + '&y=' + lng);//새탭에 열기
		})

	})




}




