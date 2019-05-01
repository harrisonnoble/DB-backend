'use strict';

module.exports = function(app) {

  var userControl = require('../Controller/userController.js');
  var workoutControl = require('../Controller/workoutPlanController.js');
  var progressControl = require('../Controller/progressController.js');
  var goalControl = require('../Controller/goalController.js');
  var mealControl = require('../Controller/mealHistoryController.js');
  var mealPlanControl = require('../Controller/mealPlanController.js');

  //USER
  //Register, login
  app.route('/register')              //GOOD
    .post(userControl.create_user);
  app.route('/login')                  //GOOD
    .post(userControl.login_user);
  //Updating user info
  app.route('/user/username/:user_id')  //GOOD
    .put(userControl.update_username);
  app.route('/user/email/:user_id')   //GOOD
    .put(userControl.update_email);
  app.route('/user/f_name/:user_id')  //GOOD
    .put(userControl.update_fname);
  app.route('/user/l_name/:user_id')  //GOOD
    .put(userControl.update_lname);
  app.route('/user/password/:user_id')   //GOOD
    .put(userControl.update_pass);
  app.route('/user/phone/:user_id')   //GOOD
    .put(userControl.update_phone);
  //Getting users
  app.route('/user/:user_id')     //GOOD
    .get(userControl.get_user);
  app.route('/users')             //GOOD
    .get(userControl.list_all_users);

//-------------------------------------------------

  //WORKOUT PLANS
  //create and delete
  app.route('/workoutplan/create/:user_id')   //GOOD
    .post(workoutControl.create_plan);
  app.route('/workoutplan/delete/:plan_id')   //GOOD
    .delete(workoutControl.delete_plan);
  //selecting based on plan id or user id
  app.route('/workoutplan/:plan_id')          //GOOD
    .get(workoutControl.select_plan_by_id);
  app.route('/user/workoutplan/:user_id')     //GOOD
    .get(workoutControl.select_plan_by_userID);
  //edit info
  app.route('/workoutplan/description/:plan_id')    //GOOD
    .put(workoutControl.update_description);
  app.route('/workoutplan/calories/:plan_id')     //GOOD
    .put(workoutControl.update_calories);
  app.route('/workoutplan/workouttime/:plan_id')  //GOOD
    .put(workoutControl.update_time);

//-------------------------------------------------

  //PROGRESS
  //create and delete
  app.route('/progress/create/:user_id')      //GOOD
    .post(progressControl.create_progress);
  app.route('/progress/delete/:prog_id')      //GOOD
    .delete(progressControl.delete_progress);
  //selecting based on progress id or user id
  app.route('/progress/:prog_id')             //GOOD
    .get(progressControl.select_progress);
  app.route('/user/progress/:user_id')        //GOOD
    .get(progressControl.select_progress_by_userID);
  //edit info
  app.route('/progress/height/:prog_id')      //GOOD
    .put(progressControl.update_height);
  app.route('/progress/weight/:prog_id')      //GOOD
    .put(progressControl.update_weight);
  app.route('/progress/age/:prog_id')         //GOOD
    .put(progressControl.update_age);
  app.route('/progress/description/:prog_id')  //GOOD
    .put(progressControl.update_descript);

//-------------------------------------------------

  //GOALS
  //create and delete
  app.route('/goal/create/:user_id')      //GOOD
    .post(goalControl.create_goal);
  app.route('/goal/delete/:goal_id')      //GOOD
    .delete(goalControl.delete_goal);
  //selecting based on goal id or user id
  app.route('/goal/:goal_id')               //GOOD
    .get(goalControl.select_goal);
  app.route('/user/goals/:user_id')         //GOOD
    .get(goalControl.select_goals_by_userID);
  //edit info
  app.route('/goal/description/:goal_id')   //GOOD
    .put(goalControl.update_description);


//-------------------------------------------------

    //MEAL HISTORY
    //create
    app.route('/meal/create/:user_id')      //GOOD
      .post(mealControl.add_meal);
    app.route('/meal/delete/:meal_id')      //GOOD
      .delete(mealControl.delete_meal);
    //selecting based on meal id and user id
    app.route('/meal/:meal_id')             //GOOD
      .get(mealControl.select_meal_by_id);
    app.route('/user/meal/:user_id')          //GOOD
      .get(mealControl.select_meal_by_userID);


//--------------------------------------------------

    //MEAL PLAN
    //create
    app.route('/mealplans/create/:user_id')   //GOOD
      .post(mealPlanControl.add_mealplan);
    //selecting based on meal id and user id
    app.route('/mealplans/:mealplan_id')       //GOOD
      .get(mealPlanControl.select_mealplan_by_id);
    app.route('/user/mealplans/:user_id')       //GOOD
      .get(mealPlanControl.select_mealplan_by_userID);
    //delete
    app.route('/mealplans/delete/:mealplan_id')   //GOOD
      .delete(mealPlanControl.delete_mealplan);
};