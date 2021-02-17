const newsRoutes = require('./news');
const siteRoutes = require('./site');
const coursesRoutes = require('./courses');

function route(app) {
    
    // app.get('/TrucQuynh', (req, res) => {
    // res.render('home');
    // })
    app.use('/news', newsRoutes);
    app.use('/courses', coursesRoutes);

    app.use('/', siteRoutes);
}

module.exports = route;
