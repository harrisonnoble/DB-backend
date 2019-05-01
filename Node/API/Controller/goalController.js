'use strict';

var Goal = require('../Models/goalModel.js');

exports.create_goal = function(req, res){
  if(!req.params.user_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  var new_goal = new Goal(req.body);
  if (!new_goal.descript || !new_goal.goal_date) {
    res.status(400).json({
      "code": 400,
      "response":"Please provide input for all fields."
    });
  }else{
    Goal.insertNewGoal(req.params.user_id, new_goal, function(err, goal){
      if(err){
        res.send(err);
      } else {
        res.json(goal);
      }
    });
  }
};

exports.delete_goal = function(req, res){
  if(!req.params.goal_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  } else{
    Goal.deleteGoalByID(req.params.goal_id, function(err,goal){
      if (err){
        res.send(err);
      } else{
        res.json(goal);
      }
    });
  }
};

exports.select_goal = function(req, res){
  if(!req.params.goal_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }else{
    Goal.selectGoalByID(req.params.goal_id, function(err,goal){
      if(err){
        res.send(err);
      } else {
        res.json(goal);
      }
    });
  }
};

exports.select_goals_by_userID = function(req, res){
  if(!req.params.user_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }else{
    Goal.selectGoalsByUserID(req.params.user_id, function(err,goal){
      if(err){
        res.send(err);
      } else {
        res.json(goal);
      }
    });
  }
};

exports.update_description = function(req, res){
  if(!req.params.goal_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }else if(!req.body.description){
    res.status(400).json({
      "code": 400,
      "response":"Missing description in API request."
    });
  }else{
    Goal.updateDesByID(req.params.goal_id, req.body.description, function(err,goal){
      if (err){
        res.send(err);
      }else{
        res.json(goal);
      }
    });
  }
};

// exports.update_date = function(req, res){
//   if(!req.params.goal_id){
//     res.status(400).json({
//       "code": 400,
//       "response":"Missing ID in API request."
//     });
//   }else if(!req.body.goal_date){
//     res.status(400).json({
//       "code": 400,
//       "response":"Missing description in API request."
//     });
//   }else{
//     Goal.updateDateByID(req.params.goal_id, req.body.goal_date, function(err,goal){
//       if (err){
//         res.send(err);
//       }else{
//         res.json(goal);
//       }
//     });
//   }
// };