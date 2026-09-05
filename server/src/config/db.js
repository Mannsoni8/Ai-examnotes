import mongoose from 'mongoose'
import config from './config.js'

export const connectDB = async()=>{
    try {
        await mongoose.connect(config.MONGODB_URI)
        console.log('Database is created')
    } catch (error) {
        console.log('Error in connecting database',error)
    }
}