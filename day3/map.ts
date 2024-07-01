const employees= [
    {name: "tim", id: 1},
    {name: "cindy", id: 2},
    {name: "rob", id: 3},  
];

const elements = employees.map((item, index) => {
    // return `<div>${item.id} - ${item.name}</div>`;
    //Output [ '<div>1 - tim</div>', '<div>2 - cindy</div>', '<div>3 - rob</div>' ]   map을 쓰면 return을 돌면서 배열이 된다

    return `${item.id*2}`;  //[ '2', '4', '6' ]
});
console.log(elements);
