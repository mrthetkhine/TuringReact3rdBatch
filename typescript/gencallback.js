var obj = {
    add: function (data) {
        this.data = data;
        console.log('Add ', data);
    },
    get: function () {
        return this.data;
    }
};
var obj2 = obj;
obj.add("Some");
console.log('Get ', obj.get());
