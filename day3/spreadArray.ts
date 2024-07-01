namespace SpreadArray {
    const a = [1,2,3];
    const b = [4,5,6];

    const c = [...a, ...b];
    const d = a.concat(b);

    console.log("c before",c)
    console.log("d before", d);

    a.push(10);

    console.log("a", a);
    console.log("b", b);
    console.log("c after", c);
    console.log("d after", d);
} 

// Output
// c before [ 1, 2, 3, 4, 5, 6 ]
// d before [ 1, 2, 3, 4, 5, 6 ]
// a [ 1, 2, 3, 10 ]
// b [ 4, 5, 6 ]
// c after [ 1, 2, 3, 4, 5, 6 ]
// d after [ 1, 2, 3, 4, 5, 6 ]