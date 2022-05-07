interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

let obj = {
    
    add(data : string)
    {
        this.data = data;
        console.log('Add ',data);
    },
    get():string
    {
        return this.data;
    }
}
let obj2 : Backpack<string> = obj;
obj.add("Some");
console.log('Get ',obj.get());