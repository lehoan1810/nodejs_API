const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug=require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true }// slug sẽ lấy đường dẫn từ name
    //unique: true => nghĩa là giá trị slug chỉ tồn tại 1 cái thôi
    //tránh tình trạng 2 slug trùng nhau thì sẽ chỉ vào đc 1 cái
},{timestamps:true,});

//export model ra ngoài
module.exports = mongoose.model('Course', Course);
