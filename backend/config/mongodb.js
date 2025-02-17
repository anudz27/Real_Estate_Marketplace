import mongoose from 'mongoose';

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected!');
    });

    await mongoose.connect('mongodb+srv://anuththaradias:urbanDB@cluster0.4dxzt.mongodb.net')
};

export default connectDB;