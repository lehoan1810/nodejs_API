const Course = require('../models/Course');
//vì chỉ dùng có 1 course của 1 document nên sử dụng mongooseToOject
const { mongooseToOject } = require('../../util/mongoose');
class CourseController{
    //[GET] /
    // [GET] /search
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })//dùng để lấy 1 bảng ghi hay 1 dữ liệu gì đó
        //[GET]                                  //trong CSDL ví dụ như 1 khóa học
            .then(course => {
                res.render('courses/show', {
                    course: mongooseToOject(course)
                });
                
            })
            .catch(next)
    }
    //[GET]
    create(req, res, next) {
        res.render('courses/create');
    }
    //[POST] gửi yêu cầu thêm dữ liệu, tạo thêm 1 tài nguyên 
    store(req, res, next) {
        const course = new Course(req.body);//tạo dữ liệu vào mongoose
        course.save()
            .then(() => res.redirect('/'))
            .catch(err => {
                
            })
    }
    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => {
                res.render('courses/edit', {
                    course: mongooseToOject(course)
                })
            })
            .catch(next)
    }
    //[PUT] /courses/:id 
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
        //          //lấy _id của bài viết đó    //dữ liệu mún chỉnh sửa
                                           
            // .redirect là dùng để điều hướng về trang khác trương ứng với đường dẫn
            .then(() => res.redirect('/me/stored/courses'))
            .catch (next);
    }
    //[DELETE] /courses/:id
    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch (next);
    }
}
module.exports = new CourseController();
