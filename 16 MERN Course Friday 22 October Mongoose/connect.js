const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Book');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'Connection error!!'))
db.once('open',()=>{
    console.log('Connection established!!');
    var BookSchema=mongoose.Schema({
        name: String,
        price: Number,
        quantity: Number
    }
    )
    var Book=mongoose.model('Book',BookSchema,'BookStore')
    var book1=new Book({name:'Temp 3', price:100, quantity: 10});
    book1.save((err,book)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Insertion successfull!!!");
        }
    })
    var book1=new Book({name:'Temp 2', price:100, quantity: 10, p: 1000});
    book1.save((err,book)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Insertion successfull!!!");
        }
    })
})

