var request = require('request');

module.exports = function(cep, callback){
	request({
		url:'http://cep.republicavirtual.com.br/web_cep.php',
		method:'get',
		json: true,
		qs:{
			fomato:'json', 
			cep:cep
		}
	}, function(res){
		console.log(res)
	});
}
