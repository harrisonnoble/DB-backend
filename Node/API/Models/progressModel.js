'use strict';

var sql = require('./db.js');

//Progress object constructor
var Progress = function(progress){
	this.user_id = progress.user_id,
	this.height = progress.height,
	this.weight = progress.weight,
	this.age = progress.age,
	this.description = progress.description,
	this.curr_date = new Date();
};

//create progress
Progress.createProgress = function(id, newProgress, result){
	sql.query("INSERT INTO `DatabaseProject`.`progress` (`user_id`, `height`, `weight`, `age`, `descript`, `curr_date`) VALUES (" + id + ", " + newProgress.height + ", " + newProgress.weight + ", " + newProgress.age + ", '" + newProgress.description + "', now() );",
		function(err, res){
			if(err){
				result(err, null);
			}else{
				result(null,{
					"code": 200,
					"response": "Insert successfull.",
				});
			}
		}
	);
};

//delete progress
Progress.deleteProgressByID = function(id, result){
	sql.query("DELETE FROM `DatabaseProject`.`progress` WHERE prog_id = ?;", [id], function(err, res){
		if(err){
			result({"code":204,"response":"Could not locate id in table."},null);
		}else{
			result(null, res);
		}
	});
};

//select progress by progress id
Progress.selectProgressByID = function(id, result){
	sql.query("SELECT * FROM `DatabaseProject`.`progress` WHERE prog_id = ?;", [id], function(err, res){
		if(err){
			result({"code":204,"response":"Could not locate id in table."},null);
		}else{
			result(null,res);
		}
	});
};

//select progress by user id
Progress.selectProgressByUserID = function(id, result){
	sql.query("SELECT * FROM `DatabaseProject`.`progress` WHERE user_id = ?;", [id], function(err, res){
		if(err){
			result({"code":204,"response":"Could not locate id in table."},null);
		}else{
			result(null,res);
		}
	});
};

//update height by progress id
Progress.updateHeightByID = function(id, height, result){
	sql.query("UPDATE `DatabaseProject`.`progress` SET height = ? WHERE prog_id = ?;", [height, id], function(err, res){
		if(err){
			result(err, null);
		}else{
			result(null,{
				"code": 200,
				"response": "Update successfull.",
				"height": height
			});
		}
	});
};

//update weight by progress id
Progress.updateWeightByID = function(id, weight, result){
	sql.query("UPDATE `DatabaseProject`.`progress` SET weight = ? WHERE prog_id = ?;", [weight, id], function(err, res){
		if(err){
			result(err, null);
		}else{
			result(null,{
				"code": 200,
				"response": "Update successfull.",
				"weight": weight
			});
		}
	});
};

//update age by progress id
Progress.updateAgeByID = function(id, age, result){
	sql.query("UPDATE `DatabaseProject`.`progress` SET age = ? WHERE prog_id = ?;", [age, id], function(err, res){
		if(err){
			result(err, null);
		}else{
			result(null,{
				"code": 200,
				"response": "Update successfull.",
				"age": age
			});
		}
	});
};

//update description by progress id
Progress.updateDescriptByID = function(id, description, result){
	sql.query("UPDATE `DatabaseProject`.`progress` SET descript = ? WHERE prog_id = ?;", [description, id], function(err, res){
		if(err){
			result(err, null);
		}else{
			result(null,{
				"code": 200,
				"response": "Update successfull.",
				"description": description
			});
		}
	});
};

module.exports = Progress;
