class HomeController {
    index(req, res) {
        res.render('Home', {
            title: 'صفحه اصلی',
            message: 'به وب‌سایت ما خوش آمدید'
        });
    }
}

module.exports = new HomeController(); 