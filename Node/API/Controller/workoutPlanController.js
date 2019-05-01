'use strict';

var WorkPlan = require('../Models/workoutPlanModel.js');

exports.create_plan = function(req, res){
  if(!req.params.user_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  var new_plan = new WorkPlan(req.body);
  if (!new_plan.description || !new_plan.calories || !new_plan.workout_time) {
    res.status(400).json({
      "code": 400,
      "response":"Please provide input for all fields."
    });
  }else{
    WorkPlan.createNewPlan(req.params.user_id, new_plan, function(err, plan){
      if(err){
        res.send(err);
      } else {
        res.json(plan);
      }
    });
  }
};

exports.delete_plan = function(req, res){
  if(!req.params.plan_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  } else{
    WorkPlan.deletePlanByID(req.params.plan_id, function(err,plan){
      if (err){
        res.send(err);
      } else{
        res.json(plan);
      }
    });
  }
};

exports.select_plan_by_id = function(req, res){
  if(!req.params.plan_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }else{
    WorkPlan.selectPlanByID(req.params.plan_id, function(err,plan){
      if(err){
        res.send(err);
      } else {
        res.json(plan);
      }
    });
  }
};

exports.select_plan_by_userID = function(req, res){
  if(!req.params.user_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }else{
    WorkPlan.selectPlansByUserID(req.params.user_id, function(err,plan){
      if(err){
        res.send(err);
      } else {
        res.json(plan);
      }
    });
  }
};

exports.update_description = function(req, res){
  if(!req.params.plan_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  } else if(!req.body.description){
    res.status(400).json({
      "code": 400,
      "response":"Missing description in API request."
    });
  } else{
    WorkPlan.updateDescriptionByID(req.params.plan_id, req.body.description, function(err,plan){
      if (err){
        res.send(err);
      } else{
        res.json(plan);
      }
    });
  }
};

exports.update_calories = function(req, res){
  if(!req.params.plan_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  } else if(!req.body.calories){
    res.status(400).json({
      "code": 400,
      "response":"Missing calories in API request."
    });
  } else{
    WorkPlan.updateCaloriesByID(req.params.plan_id, req.body.calories, function(err,plan){
      if (err){
        res.send(err);
      } else{
        res.json(plan);
      }
    });
  }
};

exports.update_time = function(req, res){
  if(!req.params.plan_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  } else if(!req.body.workout_time){
    res.status(400).json({
      "code": 400,
      "response":"Missing time in API request."
    });
  } else{
    WorkPlan.updateTimeByID(req.params.plan_id, req.body.workout_time, function(err,plan){
      if (err){
        res.send(err);
      } else{
        res.json(plan);
      }
    });
  }
};
