const mongoose = require('mongoose');

const url = "mongodb+srv://sarikareddy0627:YIqcrZP4mgYum272@crud.lc6qr.mongodb.net/?retryWrites=true&w=majority&appName=crud"; 

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;  

db.on('connected', () => {
    console.log("Connected to MongoDB server successfully");
});
db.on('error', (err) => {
    console.log("Error occurred:", err);
});
db.on('disconnected', () => {
    console.log("Disconnected from MongoDB server");
});
