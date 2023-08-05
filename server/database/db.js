import mongoose  from 'mongoose';

const Connection = async (username = 'Latika', password = 'XQGMadp2xnSzvRHb') => {
    const URL = `mongodb+srv://Latika:VbeqQpN8UjXZ5ZCb@cluster0.ab5kbek.mongodb.net/ReserveIQ?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;