'use strict';

var User = require('../Models/userModel.js');

exports.create_user = function(req, res){
  var new_user = new User(req.body);
  if (!new_user.email || !new_user.pass || !new_user.f_name || !new_user.l_name || !new_user.username) {
    res.status(400).json({
      "code": 400,
      "response":"Please provide input for all fields."
    });
  }else{
    User.createUser(new_user, function(err,user){
      if (err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }
};

exports.login_user = function(req,res){
  var login_user = new User(req.body);
  if((!login_user.username && !login_user.email) || !login_user.pass){
    res.status(400).json({
      "code": 400,
      "response":"Please provide input for all fields."
    });
  }else{
    User.loginUser(login_user, function(err, user){
      if(err){
        res.json(err);
      }
      else {
        res.json(user);
      }
    });
  }
};

// exports.delete_user = function(req,res){
//   if(!req.params.user_id){
//     res.status(400).json({
//       "code": 400,
//       "response":"Missing ID in API request."
//     });
//   }else{
//     User.deleteUserByID(req.params.user_id, function(err,user){
//       if (err){
//         res.send(err);
//       }else{
//         res.json(user);
//       }
//     });
//   }
// };

exports.update_username = function(req,res){
  if(!req.params.user_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  } else if(!req.body.username){
    res.status(400).json({
      "code": 400,
      "response":"Missing username in API request body."
    });
  } else{
    User.updateUsernameByID(req.params.user_id, req.body.username, function(err,user){
      if(err){
        res.send(err);
      } else {
        res.json(user);
      }
    });
  }
};

exports.update_email = function(req,res){
  if(!req.params.user_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  } else if(!req.body.email){
    res.status(400).json({
      "code": 400,
      "response":"Missing email in API request body."
    });
  } else{
    User.updateEmailByID(req.params.user_id, req.body.email, function(err,user){
      if(err){
        res.send(err);
      } else {
        res.json(user);
      }
    });
  }
};

exports.update_fname = function(req,res){
  if(!req.params.user_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  } else if(!req.body.f_name){
    res.status(400).json({
      "code": 400,
      "response":"Missing first name in API request body."
    });
  } else{
    User.updateFNameByID(req.params.user_id, req.body.f_name, function(err,user){
      if(err){
        res.send(err);
      } else {
        res.json(user);
      }
    });
  }
};

exports.update_lname = function(req,res){
  if(!req.params.user_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  } else if(!req.body.l_name){
    res.status(400).json({
      "code": 400,
      "response":"Missing last name in API request body."
    });
  } else{
    User.updateLNameByID(req.params.user_id, req.body.l_name, function(err,user){
      if(err){
        res.send(err);
      } else {
        res.json(user);
      }
    });
  }
};

exports.update_pass = function(req,res){
  if(!req.params.user_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  } else if(!req.body.pass){
    res.status(400).json({
      "code": 400,
      "response":"Missing password in API request body."
    });
  } else{
    User.updatePasswordByID(req.params.user_id, req.body.pass, function(err,user){
      if(err){
        res.send(err);
      } else {
        res.json(user);
      }
    });
  }
};

exports.update_phone = function(req,res){
  if(!req.params.user_id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  } else if(!req.body.phone){
    res.status(400).json({
      "code": 400,
      "response":"Missing phone number in API request body."
    });
  } else{
    User.updatePhoneByID(req.params.user_id, req.body.phone, function(err,user){
      if(err){
        res.send(err);
      } else {
        res.json(user);
      }
    });
  }
};

exports.get_user = function(req, res) {
  User.getUserByID(req.params.user_id, function(err, user){
    if (err){
      res.send(err);
    }
    res.json(user);
  });
};

exports.list_all_users = function(req,res){
  User.getAllUsers(function(err, user){
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};
