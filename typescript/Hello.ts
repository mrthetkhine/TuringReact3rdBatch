var data:string = "Hello"; //Type Inferencing
//data = false;
var result = data +2;
console.log('Result ',result);

interface User
{
    name: string,
    age : number;
}
let obj: User = {
    name : "Tk",
    age :37
};
obj.name = 'Update';
interface Another
{
    name: string,
    age : number;
}
let another:Another = obj;
console.log('Obj ',obj);
console.log('Another ',another);
console.log('Type of another ',typeof another);
