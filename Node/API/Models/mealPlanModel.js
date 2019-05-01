'use strict';

var sql = require('./db.js');

//mealHistory object constructor
var mealPlan = function(mealPlan){
	this.user_id = mealPlan.user_id,
	this.calories = mealPlan.calories
};

//Create new meal
mealPlan.addMealPlan = function(id, newMealPlan, result){
	sql.query("INSERT INTO `DatabaseProject`.`mealPlans` (`user_id`,`calories`) VALUES (" + id +  ", " + newMealPlan.calories + ");",
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

//deletes a meal plan
mealPlan.deleteMealPlanByID = function(id, result) {
	sql.query("DELETE FROM `DatabaseProject`.`mealPlans` where mealplan_id = ?;", [id],
		function(err, res){
			if(err){
		result({"code":204,"response":"Could not locate id in table."},null);
  	} else {
		result(null,res);
  	}
		}
	);
};

//select previous meal by meal id
mealPlan.selectMealPlanByID = function(id, result){
	sql.query("SELECT * FROM `DatabaseProject`.`mealPlans` WHERE mealplan_id = ?;", [id], function(err, res){
		if(err){
			result({"code":204,"response":"Could not locate id in table."},null);
		}else{
			result(null,res);
		}
	});
};

//select meals by user id
mealPlan.selectMealPlanByUserID = function(id, result){
	sql.query("SELECT * FROM `DatabaseProject`.`mealPlans` WHERE user_id = ?;", [id], function(err, res){
		if(err){
			result({"code":204,"response":"Could not locate id in table."},null);
		}else{
			result(null,res);
		}
	});
};

module.exports = mealPlan;
