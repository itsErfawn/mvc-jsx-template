class AboutController {
    index(req, res) {
        res.render('Home', {
            title: 'درباره ما',
            message: 'صفحه درباره ما'
        });
    }
}

module.exports = new AboutController(); 