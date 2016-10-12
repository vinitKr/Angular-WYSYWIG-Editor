exports.home = function(req, res){
	// res.render('index.ejs');
	res.render('index', { title: 'TestApp' })
}

exports.save = function(req, res){
	// console.log(req.body);
	res.send('got it')
}
