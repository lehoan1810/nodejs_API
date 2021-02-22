const newsRoutes = require('./news');
const siteRoutes = require('./site');
const coursesRoutes = require('./courses');
const meRoutes = require('./me');
function route(app) {
    
    // app.get('/TrucQuynh', (req, res) => {
    // res.render('home');
    // })
    app.use('/me', meRoutes);
    app.use('/news', newsRoutes);
    app.use('/courses', coursesRoutes);
    app.use('/', siteRoutes);
}

module.exports = route;
