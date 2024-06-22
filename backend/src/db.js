const mongoose = require('mongoose');

const connectToMongo = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/test-react', {
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
            // add any other options you need
        });
        console.log('Connected Succesfully');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
};

module.exports = connectToMongo;