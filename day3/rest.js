function doSomething(a, ...others){
    //...others =[2,3,4,5,6,7]
    console.log(a, others, others[others.length -1]);
    //1 [2,3,4,5,6,7]  -1은 마지막 제외? 그렇게 한다라고 알아두기
}

doSomething(1,2,3,4,5,6,7);