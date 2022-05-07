type NoParameterCallBack = ()=>void; 
type Another =(a:number,b:number)=>number;
function hello()
{
    console.log('Hello');
}
let fun:NoParameterCallBack = hello;
fun();

function sum(a:number,b:number):number
{
    return a+b;
}
let fun2:Another = sum;
console.log('Func2 ',fun2(1,2));
