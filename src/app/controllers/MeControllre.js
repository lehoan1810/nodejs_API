const Course = require('../models/Course');
const { multipleMogooseToOject } = require('../../util/mongoose');
class MeController{

    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount: deletedCount,
                    courses: multipleMogooseToOject(courses)
                })
                    .catch(next)
            )
    }

    //[GET] /me/stored/courses
    // storedCourses(req, res, next) {
    //     Course.find({})
    //         .then(courses => 
    //             res.render('me/stored-courses', {
    //                 courses: multipleMogooseToOject(courses)
    //             })
    //         )
    //         .catch(next);
    // }

    //[GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => 
                res.render('me/trash-courses', {
                    courses: multipleMogooseToOject(courses)
                })
            )
            .catch(next);
    }
}

module.exports = new MeController();
