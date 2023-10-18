const UserController = require('./controllers/UserController')
const NoodleController = require('./controllers/NoodleController')
const UserAuthenController = require('./controllers/UserAuthenController');
const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) => {
    app.post('/user', UserController.create)
    
    app.put('/user/:userId', UserController.put)
    
    app.delete('/user/:userId', UserController.remove)
    
    app.get('/user/:userId', UserController.show)
    
    app.get('/users', isAuthenController, UserController.index)

    //noodle
    app.post('/noodle', NoodleController.create)
    
    app.put('/noodle/:noodleId', NoodleController.put)
    
    app.delete('/noodle/:noodleId', NoodleController.remove)
    
    app.get('/noodle/:noodleId', NoodleController.show)
    
    app.get('/noodles', NoodleController.index)

    //login
    app.post('/login', UserAuthenController.login)
}