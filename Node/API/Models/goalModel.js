'use strict';

var sql = require('./db.js');

//Goals object constructor
var Goals = function(goals){
	this.user_id = goals.user_id;
	this.descript = goals.descript;
	this.goal_date = goals.goal_date;
};

//Insert a new goal
Goals.insertNewGoal = function(id, newGoal, result){
	sql.query("INSERT INTO `DatabaseProject`.`goals` (`user_id`, `descript`, `goal_date`) VALUES (" + id + ", '" + newGoal.descript + "', '" + newGoal.goal_date + "');",
		function(err, res){
			if(err){
				result(err, null);
			}else{
				result(null,{
					"code": 200,
					"response": "Insert successfull."
				});
			}
		}
	);
};

//delete goal by goal id
Goals.deleteGoalByID = function(id, result){
	sql.query("DELETE FROM `DatabaseProject`.`goals` where goal_id = ?;", [id],
		function(err, res){
			if(err){
        result(err,null);
      } else {
        result(null,res);
      }
		}
	);
};

//select goal by goal id
Goals.selectGoalByID = function(id, result){
	sql.query("SELECT * FROM `DatabaseProject`.`goals` WHERE goal_id = ?", [id],
		function(err, res){
			if(err){
        result(err,null);
      } else {
        result(null,res);
      }
		}
	);
};

//select goals by user id
Goals.selectGoalsByUserID = function(id, result){
	sql.query("SELECT * FROM `DatabaseProject`.`goals` WHERE user_id = ?", [id],
		function(err, res){
			if(err){
        result({"code":204,"response":"Could not locate id in table."},null);
      } else {
        result(null,res);
      }
		}
	);
};

//update goal description by goal id
Goals.updateDesByID = function(id, descript, result){
	sql.query("UPDATE `DatabaseProject`.`goals` SET descript = ? WHERE goal_id = ?;", [descript, id], function(err, res){
		if(err){
			result(err, null);
		}else{
			result(null,{
				"code": 200,
				"response": "Update successfull.",
				"descript": descript
			});
		}
	});
};

//Update/remove goal_date by user_id and descript
// Goals.updateDateByID = function(id, goal_date, result){
// 	sql.query("UPDATE `DatabaseProject`.`goals` SET goal_date = ? WHERE user_id = ?;", [goal_date, id], function(err, res){
// 		if(err){
// 			result(err,null);
// 		}else{
// 			result(null,{
// 				"code": 200,
// 				"response": "Update successfull.",
// 				"goal_date": goal_date
// 			});
// 		}
// 	});
// };

module.exports = Goals;