class HomeController {
    index(req, res) {
        res.render('Home', {
            title: 'صفحه اصلی',
            message: 'به وب‌سایت ما خوش آمدید'
        });
    }

    about(req, res) {
        res.render('About', {
            title: 'درباره ما',
            content: 'ما یک تیم حرفه‌ای هستیم'
        });
    }

    contact(req, res) {
        res.render('Contact', {
            title: 'تماس با ما',
            email: 'info@example.com'
        });
    }
}

module.exports = new HomeController(); 