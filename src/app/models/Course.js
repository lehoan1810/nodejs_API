const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');

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

//add pluin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true // khi xóa sẽ thêm khoảng thời gian xóa
    ,overrideMethods: 'all' //đã mềm xóa rồi thì ko lấy ra làm gì cả nên all là ko lấy tất cả
});

//export model ra ngoài
module.exports = mongoose.model('Course', Course);
