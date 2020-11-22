const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')



const app = express()



// giving the server a port to run on
const PORT = process.env.PORT || 8100;
const MONGODB_URI = 'mongodb+srv://vasudev:12345@shipment-1.5y3go.mongodb.net/<dbname>?retryWrites=true&w=majority'

// conncetion of mongoDB
mongoose.connect(MONGODB_URI || 'mongodb://localhost/shipment-system', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// to check wheteher connection is done or not
mongoose.connection.on('connected', () => {
    console.log('mongoose connecdted!!')
});

//Schema
var ETD=Date();


const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    awbnumber: Number,
    carrier: String,
    source: String,
    destination: String,
    brand: String,
    status: String,
    ETD:String
    


});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

const data = {
    awbnumber: 1231321,
    carrier: "safeExpress",
    source: "banglaore",
    destination: "delhi",
    brand: "USPA",
    status: "Delivered"
}

const newBlogPost = new BlogPost(data);

newBlogPost.save((err) => {
    if (err) {
        console.log('cant operate')

    } else {
        console.log('successfull')
    }
});


app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    BlogPost.find({})
        .then((data) => {
            console.log('data', data)
            res.json(data);
        })
        .catch((error) => {
            console.log('error', daerrorta)
        })
});


app.listen(PORT, console.log(`Server listening at ${PORT}`))