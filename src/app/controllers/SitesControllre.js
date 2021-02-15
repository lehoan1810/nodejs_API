const Course = require('../models/Course');
const { multipleMogooseToOject } = require('../../util/mongoose');
class SitesController{
    //[GET] /
    index(req, res,next) {
        Course.find({})
            .then(courses => {
                res.render('home', { courses: multipleMogooseToOject(courses)});
            })
            .catch(err =>next(err))
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SitesController;
