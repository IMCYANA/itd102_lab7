const controller = require ('../controllers/user.controller');

module.exports = (app) => {
    app.get('/', controller.home);
    app.get('/about', controller.about);
    app.get('/contact', controller.contact);
};