'use strict';

var Prog = require('../Models/progressModel.js');

exports.create_progress = function(req, res){
  if(!req.params.user_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  var new_prog = new Prog(req.body);
  if (!new_prog.height || !new_prog.weight || !new_prog.age || !new_prog.description) {
    res.status(400).json({
      "code": 400,
      "response":"Please provide input for all fields."
    });
  }else{
    Prog.createProgress(req.params.user_id, new_prog, function(err, prog){
      if(err){
        res.send(err);
      } else {
        res.json(prog);
      }
    });
  }
};

exports.delete_progress = function(req, res){
  if(!req.params.prog_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  } else{
    Prog.deleteProgressByID(req.params.prog_id, function(err,prog){
      if (err){
        res.send(err);
      } else{
        res.json(prog);
      }
    });
  }
};

exports.select_progress = function(req, res){
  if(!req.params.prog_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }else{
    Prog.selectProgressByID(req.params.prog_id, function(err,prog){
      if(err){
        res.send(err);
      } else {
        res.json(prog);
      }
    });
  }
};

exports.select_progress_by_userID = function(req, res){
  if(!req.params.user_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }else{
    Prog.selectProgressByUserID(req.params.user_id, function(err,prog){
      if(err){
        res.send(err);
      } else {
        res.json(prog);
      }
    });
  }
};

exports.update_height = function(req, res){
  if(!req.params.prog_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  } else if(!req.body.height){
    res.status(400).json({
      "code": 400,
      "response":"Missing height in API request."
    });
  } else{
    Prog.updateHeightByID(req.params.prog_id, req.body.height, function(err,prog){
      if (err){
        res.send(err);
      } else{
        res.json(prog);
      }
    });
  }
};

exports.update_weight = function(req, res){
  if(!req.params.prog_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  } else if(!req.body.weight){
    res.status(400).json({
      "code": 400,
      "response":"Missing weight in API request."
    });
  } else{
    Prog.updateWeightByID(req.params.prog_id, req.body.weight, function(err,prog){
      if (err){
        res.send(err);
      } else{
        res.json(prog);
      }
    });
  }
};

exports.update_age = function(req, res){
  if(!req.params.prog_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  } else if(!req.body.age){
    res.status(400).json({
      "code": 400,
      "response":"Missing age in API request."
    });
  } else{
    Prog.updateAgeByID(req.params.prog_id, req.body.age, function(err,prog){
      if (err){
        res.send(err);
      } else{
        res.json(prog);
      }
    });
  }
};

exports.update_descript = function(req, res){
  if(!req.params.prog_id){
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
    Prog.updateDescriptByID(req.params.prog_id, req.body.description, function(err,prog){
      if (err){
        res.send(err);
      } else{
        res.json(prog);
      }
    });
  }
};
