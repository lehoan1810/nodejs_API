const Course = require('../models/Course');
class SitesController{
    //[GET] /
    index(req, res,next) {
        Course.find({})
            .then(courses => {
                courses = courses.map(courses => courses.toObject());
                res.render('home', { courses });
            })
            .catch(err =>next(err))
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SitesController;
