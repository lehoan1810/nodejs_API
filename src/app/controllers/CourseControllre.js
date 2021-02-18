const Course = require('../models/Course');
const { mongooseToOject } = require('../../util/mongoose');
class CourseController{
    //[GET] /
    // [GET] /search
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
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
    //[POST]
    store(req, res, next) {
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch(err => {
                
            })
    }
}

module.exports = new CourseController();
