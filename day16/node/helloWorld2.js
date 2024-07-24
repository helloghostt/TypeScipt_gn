function helloWorld() {
    console.log('Hello, World!');
    helloNode();

}
function helloNode() {
    console.log('Hello, Node!');
}
helloWorld();

// node .\helloWorld.js 실행시켜보면
// helloWorld.js는 안되고 
// helloWorld2.js는 됨
// Output:
// Hello, World!
// Hello, Node!