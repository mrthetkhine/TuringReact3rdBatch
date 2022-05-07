function hello() {
    console.log('Hello');
}
var fun = hello;
fun();
function sum(a, b) {
    return a + b;
}
var fun2 = sum;
console.log('Func2 ', fun2(1));
