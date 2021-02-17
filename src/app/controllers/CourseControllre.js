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
}

module.exports = new CourseController();
