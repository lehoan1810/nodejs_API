const newsRoutes = require('./news');
const siteRoutes = require('./site');
function route(app) {
    
    app.get('/TrucQuynh', (req, res) => {
    res.render('home');
    })
    app.use('/news', newsRoutes);
    app.use('/', siteRoutes);
}

module.exports = route;
