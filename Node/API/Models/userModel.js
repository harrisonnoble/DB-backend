'use strict';

var sql = require('./db.js');

var User = function(user) {
  this.username = user.username;
  this.email = user.email;
  this.f_name = user.f_name;
  this.l_name = user.l_name;
  this.pass = user.pass;
  this.phone = user.phone;
};

User.createUser = function(newUse, result) {
  sql.query("INSERT INTO `DatabaseProject`.`Users` (`username`,`email`,`f_name`,`l_name`,`pass`,`phone`) VALUES ('" + newUse.username + "', '" + newUse.email + "', '" + newUse.f_name + "', '" + newUse.l_name + "', '" + newUse.pass + "', " + newUse.phone + ");",
    function(err, res) {
      if (err){
        result(err, null);
      }else{
        result(null,{"code":200,"response":"User creation was sucessfull."});
      }
    }
  );
};

User.loginUser = function(userLogin, result){
  sql.query('SELECT * FROM `DatabaseProject`.`Users` WHERE email = ? OR username = ?;', [userLogin.email, userLogin.username], function(err, res) {
    if(err){
      result(err, null);
    }else{
      if(res.length > 0){
        if(res[0].pass == userLogin.pass){
          result(null,{
            "code":200,
            "response":"Login was sucessfull.",
            "user_id":res[0].user_id,
            "email":res[0].email,
            "first_name":res[0].f_name,
            "last_name":res[0].l_name,
            });
        }else{
          result({"code":204,
                  "response":"login unsuccessful, enter correct password"},null);
        }
      }else{
        result({"code":204,
                "response":"login unsuccessful, email/username not found"},null);
      }
    }
  });
};

// User.deleteUserByID = function(id, res) {
//   sql.query("DELETE from `DatabaseProject`.`Users` WHERE user_id = ?;", [id], function(err, res) {
//     if (err) {
//       console.log('all tasks error: ', err);
//       result(err, null);
//     }else{
//       console.log('all tasks: ', res);
//       result(null, res);
//     }
//   });
// };

User.updateFNameByID = function(id, first_name, result) {
  sql.query("UPDATE `DatabaseProject`.`Users` SET f_name = ? WHERE user_id = ?;", [first_name, id], function(err, res){
    if(err){
      result(err,null);
    }else{
      result(null,{
        "code":200,
        "response":"Update was sucessfull.",
        "f_name":first_name
      });
    }
  });
};

User.updateLNameByID = function(id, last_name, result) {
  sql.query("UPDATE `DatabaseProject`.`Users` SET l_name = ? WHERE user_id = ?;", [last_name, id], function(err, res){
    if(err){
      result(err,null);
    }else{
      result(null,{
        "code":200,
        "response":"Update was sucessfull.",
        "l_name":last_name
      });
    }
  });
};

User.updateUsernameByID = function(id, usern, result) {
  sql.query("UPDATE `DatabaseProject`.`Users` SET username = ? WHERE user_id = ?;", [usern, id], function(err, res){
    if(err){
      result(err,null);
    }else{
      result(null,{
        "code":200,
        "response":"Update was sucessfull.",
        "username":usern
      });
    }
  });
};

User.updateEmailByID = function(id, email, result) {
  sql.query("UPDATE `DatabaseProject`.`Users` SET email = ? WHERE user_id = ?;", [email, id], function(err, res){
    if(err){
      result(err,null);
    }else{
      result(null,{
        "code":200,
        "response":"Update was sucessfull.",
        "email":email
      });
    }
  });
};

User.updatePasswordByID = function(id, pass, result) {
  sql.query("UPDATE `DatabaseProject`.`Users` SET pass = ? WHERE user_id = ?;", [pass, id], function(err, res){
    if(err){
      result(err,null);
    }else{
      result(null,{
        "code":200,
        "response":"Password update was sucessfull.",
      });
    }
  });
};

User.updatePhoneByID = function(id, phone, result) {
  sql.query("UPDATE `DatabaseProject`.`Users` SET phone = ? WHERE user_id = ?;", [phone, id], function(err, res){
    if(err){
      result(err,null);
    }else{
      result(null,{
        "code":200,
        "response":"Phone update was sucessfull.",
        "phone number":phone
      });
    }
  });
};

User.getAllUsers = function getAllUsers(result) {
  sql.query("SELECT * FROM Users;", [], function(err, res){
    if(err) {
      result(err, null);
    }else{
      result(null, res);
    }
  });
};

User.getUserByID = function(id, result) {
  sql.query("Select * FROM Users WHERE user_id = ?;", [id], function(err, res){
    if(err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = User;
