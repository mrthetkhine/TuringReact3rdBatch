let b = Buffer.from([0x41, 0x42, 0x43]);
console.log("b.toString ",b.toString());

console.log("b.toString('hex') ",b.toString('hex'));

let zeros = Buffer.alloc(1024);
let ones =  Buffer.alloc(1024,1);

let dead = Buffer.alloc(1024, "DEADBEEF", "hex"); 
console.log("Unsigned BE",dead.readUInt32BE(0));
console.log("Unsigned LE",dead.readUInt32LE(0));