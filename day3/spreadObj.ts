namespace NamespaceA {
    class A {
        aname: string= "A";
    }

    class B {
        bname: string = "B";
    }
    const a = new A();
    const b = new B();
    const c = {...a, ...b}; //...이 spread
    const d = Object.assign(a, b);
    console.log(c);
    console.log(d);

    a.aname = "a1";
    console.log(c);  // 새로운 값으로 copy한 것임
    console.log(d); // 원래의 값을 바라보는

}

// PS C:\dev\projects\frontend_24\day3> tsc .\spreadObj.ts --target "ES6"
// PS C:\dev\projects\frontend_24\day3> node .\spreadObj.js


// Output
// { aname: 'A', bname: 'B' }
// A { aname: 'A', bname: 'B' }
// { aname: 'A', bname: 'B' }
// A { aname: 'a1', bname: 'B' }