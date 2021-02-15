
class NewsController{
    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /slus
    show(req, res) {
        res.send('Trúc Quỳnh');
    }
}

module.exports = new NewsController;
