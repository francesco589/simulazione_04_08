import mongoose from "mongoose";

const psw = '7ryH8jC20l06oB6g'
const url = `mongodb+srv://digitazon:<${psw}>@cluster0.6ctbtkw.mongodb.net/Digitazon`;


mongoose
	.connect(url)
	.then(() => console.log('db connected'))
	.catch((err) => console.log(err));

    const postsSchema = new mongoose.Schema({
        fullname: { type: String, required: true },
        gender: { type: String, required: true },
        text: { type: String, required: true }
    });


export const Post = mongoose.model('post', postsSchema, 'posts');