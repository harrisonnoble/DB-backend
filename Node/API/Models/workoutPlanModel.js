'use strict';

var sql = require('./db.js');

//WorkoutPlans object constructor
var workoutPlans = function(workoutPlans){
	this.user_id = workoutPlans.user_id,
	this.description = workoutPlans.description,
	this.calories = workoutPlans.calories,
	this.workout_time = workoutPlans.workout_time
};

//Create new workout plan
workoutPlans.createNewPlan = function(id, newWorkoutPlan, result){
	sql.query("INSERT INTO `DatabaseProject`.`workoutPlans` (`user_id`, `description`, `calories`, `workout_time`) VALUES (" + id +  ", '" + newWorkoutPlan.description + "', " + newWorkoutPlan.calories + ", " + newWorkoutPlan.workout_time + ");",
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

//delete workout plan
workoutPlans.deletePlanByID = function(id, result){
	sql.query("DELETE FROM `DatabaseProject`.`workoutPlans` where plan_id = ?;", [id],
		function(err, res){
			if(err){
        result(err,null);
      } else {
        result(null,{
					"code": 200,
					"response": "Deletion successfull.",
				});
      }
		}
	);
};

//select workout plan by plan id
workoutPlans.selectPlanByID = function(id, result){
	sql.query("SELECT * FROM `DatabaseProject`.`workoutPlans` WHERE plan_id = ?;", [id], function(err, res){
		if(err){
			result(err,null);
		}else{
			result(null,res);
		}
	});
};

//select plans by user id
workoutPlans.selectPlansByUserID = function(id, result){
	sql.query("SELECT * FROM `DatabaseProject`.`workoutPlans` WHERE user_id = ?;", [id], function(err, res){
		if(err){
			result(err,null);
		}else{
			result(null,res);
		}
	});
};

//udate description by plan id
workoutPlans.updateDescriptionByID = function(id, description, result){
	sql.query("UPDATE `DatabaseProject`.`workoutPlans` SET description = ? WHERE plan_id = ?;", [description, id], function(err, res){
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

//update calories by plan id
workoutPlans.updateCaloriesByID = function(id, calories, result){
	sql.query("UPDATE `DatabaseProject`.`workoutPlans` SET calories = ? WHERE plan_id = ?;", [calories, id], function(err, res){
		if(err){
			result(err, null);
		}else{
			result(null,{
				"code": 200,
				"response": "Update successfull.",
				"calories": calories
			});
		}
	});
};

//update time by plan id
workoutPlans.updateTimeByID = function(id, workout_time, result){
	sql.query("UPDATE `DatabaseProject`.`workoutPlans` SET workout_time = ? WHERE plan_id = ?;", [workout_time, id], function(err, res){
		if(err){
			result(err, null);
		}else{
			result(null,{
				"code": 200,
				"response": "Update successfull.",
				"workout_time": workout_time
			});
		}
	});
};

module.exports = workoutPlans;
