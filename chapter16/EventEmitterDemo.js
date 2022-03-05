const events = require('events');
const emitter = new events.EventEmitter();

emitter.on("JustOnce",(event)=>{
    console.log("JustOnce Event ",event);
})
emitter.on("someEvent",(event)=>{
    console.log("Event ",event);
})
emitter.emit("someEvent",{
    data: "SomeEvent occurs"
});

emitter.emit("JustOnce",{
    data: "JustOnce occurs"
});
