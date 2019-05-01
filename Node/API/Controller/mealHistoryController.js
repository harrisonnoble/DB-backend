'use strict';

var Meal = require('../Models/mealHistoryModel.js');

exports.add_meal = function(req, res){
  if(!req.params.user_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  var new_meal = new Meal(req.body);
  if (!new_meal.calories) {
    res.status(400).json({
      "code": 400,
      "response":"Please provide input for all fields."
    });
  }else{
    Meal.addMeal(req.params.user_id, new_meal, function(err, meal){
      if(err){
        res.send(err);
      } else {
        res.json(meal);
      }
    });
  }
};

exports.delete_meal = function(req, res){
  if(!req.params.meal_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  } else{
      Meal.deleteMealByID(req.params.meal_id, function(err,meal){
      if (err){
        res.send(err);
      } else{
        res.json(meal);
      }
    });
  }
};

exports.select_meal_by_id = function(req, res){
  if(!req.params.meal_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }else{
    Meal.selectMealByID(req.params.meal_id, function(err,meal){
      if(err){
        res.send(err);
      } else {
        res.json(meal);
      }
    });
  }
};

exports.select_meal_by_userID = function(req, res){
  if(!req.params.user_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }else{
    Meal.selectMealByUserID(req.params.user_id, function(err,meal){
      if(err){
        res.send(err);
      } else {
        res.json(meal);
      }
    });
  }
};
