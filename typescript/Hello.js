var data = "Hello"; //Type Inferencing
//data = false;
var result = data + 2;
console.log('Result ', result);
var obj = {
    name: "Tk",
    age: 37
};
obj.name = 'Update';
var another = obj;
console.log('Obj ', obj);
console.log('Another ', another);
console.log('Type of another ', typeof another);
