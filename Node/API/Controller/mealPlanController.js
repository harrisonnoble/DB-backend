'use strict';

var MealPlan = require('../Models/mealPlanModel.js');

exports.add_mealplan = function(req, res){
  if(!req.params.user_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  var new_mealplan = new MealPlan(req.body);
  if (!new_mealplan.calories) {
    res.status(400).json({
      "code": 400,
      "response":"Please provide input for all fields."
    });
  }else{
    MealPlan.addMealPlan(req.params.user_id, new_mealplan, function(err, mealplan){
      if(err){
        res.send(err);
      } else {
        res.json(mealplan);
      }
    });
  }
};

exports.delete_mealplan = function(req, res){
  if(!req.params.mealplan_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  } else{
      MealPlan.deleteMealPlanByID(req.params.mealplan_id, function(err,mealplan){
      if (err){
        res.send(err);
      } else{
        res.json(mealplan);
      }
    });
  }
};

exports.select_mealplan_by_id = function(req, res){
  if(!req.params.mealplan_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }else{
    MealPlan.selectMealPlanByID(req.params.mealplan_id, function(err,mealplan){
      if(err){
        res.send(err);
      } else {
        res.json(mealplan);
      }
    });
  }
};

exports.select_mealplan_by_userID = function(req, res){
  if(!req.params.user_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }else{
    MealPlan.selectMealPlanByUserID(req.params.user_id, function(err,mealplan){
      if(err){
        res.send(err);
      } else {
        res.json(mealplan);
      }
    });
  }
};
