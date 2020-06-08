const EventEmitter = require('events');

const emitter = new EventEmitter();

var event = 'event';
var eventWithArgument = 'eventWithArgument';
var eventArrow = 'eventArrow';

emitter.on(event, function(){
 console.log('Un evento ha ocurrido...');   
})


//se dispara el emisor
emitter.emit(event);

//escucha (Listenar))
emitter.on(eventWithArgument, function(arg){
    console.log('Un evento con los siguientes argumentos ha ocurrido: ' + arg.id + ' ' + arg.numero);
})

emitter.emit(eventWithArgument, {id: 1, numero: 24});


emitter.on(eventArrow, (arg)=>{
    console.log('Un evento FLECHA con los siguientes argumentos ha ocurrido: ' + arg.id + ' ' + arg.numero);
})

emitter.emit(eventArrow, {id: 1, numero: 24});


