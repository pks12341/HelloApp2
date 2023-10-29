//array1.js

const arr1=[]
arr1.push(10)
arr1.push('ten')
arr1.push({name : "Hong", age : 20})//이 자체를 배열로..

arr1.unshift(20) ; //배열 젤 앞에 넣음(인덱스값이 0)

console.log('크기 : ',arr1.length);
//arr1.length = 6; //배열의 크기지정. 범위를 초과하면 언디파인,0으로하면 배열사라짐

//arr1.pop();//맨뒤삭제 
//arr1.shift(); // =>배열 맨앞제거

arr1.splice(1,1,30);//추가 ,삭제, 수정 =>10 의값을 30으로 대체. splice중요
//arr1.splice(1,1)//대체할값을 안넣으면 삭제된다
arr1.splice(1,1,50,60) // 1의위치에서 1을 50,60으로 대체


for(let ary of arr1){
	console.log('ary : ',ary)
}


