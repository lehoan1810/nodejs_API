const Course = require('../models/Course');
//vì dùng cả 1 list của document để render ra trang home cho người dùng nên sử dụng mongooseToOject
const { multipleMogooseToOject } = require('../../util/mongoose');
class SitesController{
    //[GET] /
    index(req, res,next) {
        Course.find({})// models.find() => lấy ra 1 danh sách các document
            .then(courses => {//render các bài viết ra trang home
                res.render('home', { courses: multipleMogooseToOject(courses)});
            })
            .catch(err =>next(err))
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SitesController();
