const EventEmitter=require('events')
const event=new EventEmitter()
event.addListener('btn',name=>{
    console.log(`Hii ${name}`)
})
event.emit('btn', "nayan");