
module.exports = function(app){
var mainController = require('./controller/index');
app.get('/',mainController.home);
app.post('/save',mainController.save);
}
