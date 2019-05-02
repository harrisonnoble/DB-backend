CREATE DATABASE DatabaseProject;
USE DatabaseProject;

CREATE TABLE Users (
	user_id int AUTO_INCREMENT,
  username varchar(15),
  email varchar(25),
  f_name varchar(25) NOT NULL,
  l_name varchar(25) NOT NULL,
  pass varchar(20) NOT NULL,
  phone bigint,
  height int,
  weight int,
  age int,
  PRIMARY KEY (user_id)
);

CREATE TABLE goals (
	goal_id int AUTO_INCREMENT,
	user_id int,
  descript varchar(500),
  goal_date date,
	PRIMARY KEY (goal_id),
	FOREIGN KEY (user_id)
    REFERENCES DatabaseProject.Users (user_id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

CREATE TABLE progress (
	prog_id int AUTO_INCREMENT,
	user_id int,
	height int,
  weight int,
  age int,
descript varchar(500),
  curr_date datetime,
	PRIMARY KEY (prog_id),
	FOREIGN KEY (user_id)
    REFERENCES DatabaseProject.Users (user_id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

CREATE TABLE workoutPlans (
	plan_id int AUTO_INCREMENT,
	user_id int,
  description varchar(500),
  calories int,
  workout_time int,
	PRIMARY KEY (plan_id),
		FOREIGN KEY (user_id)
    REFERENCES DatabaseProject.Users (user_id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

CREATE TABLE mealHistory (
	meal_id int AUTO_INCREMENT,
	user_id int,
	calories int,
    name varchar(100),
	meal_date date,
	PRIMARY KEY (meal_id),
		FOREIGN KEY (user_id)
		REFERENCES DatabaseProject.Users (user_id)
		ON DELETE SET NULL
		ON UPDATE CASCADE
);

CREATE TABLE mealPlans (
	mealplan_id int AUTO_INCREMENT,
	user_id int,
    name varchar(100),
	calories int,
    details varchar(500),
	PRIMARY KEY (mealplan_id),
		FOREIGN KEY (user_id)
		REFERENCES DatabaseProject.Users (user_id)
		ON DELETE SET NULL
		ON UPDATE CASCADE
);

INSERT INTO DatabaseProject.Users (username, email, f_name, l_name, pass, phone) VALUES
('hnoble', 'harrisonnoble@yahoo.com', 'Harrison', 'Noble', 'password1', 9259840665),
('mfontenot', 'mfontenot@smu.edu', 'Mark', 'Fontenot', 'password2', 9259840665),
('jwatkins', 'jwatkins@smu.edu', 'Jake', 'Watkins', 'password3', 9259840665),
('jsmith', 'jsmith@nsa.gov', 'Joe', 'Smith', 'password4', 9259840665),
('fitguy', 'gfieri@gmail.gov', 'Guy', 'Fieri', 'password5', 9259840665);

INSERT INTO DatabaseProject.goals (user_id, descript) VALUES
(1, 'Actually go to the gym sometime'),
(2, 'Run the mile faster than Usain Bolt'),
(3, 'Be able to squat 250 pounds for 10 reps'),
(4, 'Bicep curl 60 pounds'),
(5, 'Bench press 150 pounds'),
(5, 'Squat 300 pounds');

INSERT INTO DatabaseProject.progress (user_id, height, weight, age, descript) VALUES
(1, 72, 155, 19, 'gained 5 pounds of muscle'),
(2, 70, 175, 35, 'ran the mile super fast'),
(3, 71, 170, 21, 'squatted 250 pounds 8 times in a row'),
(4, 68, 140, 23, 'able to bicep curl 50 pounds'),
(5, 70, 190, 45, 'bench pressed 140 pounds'),
(1, 72, 157, 19, 'went to the gym 5 times this week');

INSERT INTO DatabaseProject.workoutPlans (user_id, description, calories, workout_time) VALUES
(1, 'jog on the tredmill', 50, 30),
(2, 'jog and then use the bike', 100, 45),
(3, 'tricep workouts for 1/2 the workout then swim', 200, 60),
(4, 'squats and cardio', 75, 35),
(5, 'bicep curls and back exercises', 80, 45);

INSERT INTO DatabaseProject.mealPlans (user_id, name, calories, details) VALUES
(1, "3 meals", 2000, "eat 3 meals a day"),
(2, "No carbs", 1500, "Dont eat any carbs for a week"),
(3, "Protein diet", 2200, "get at least of 100 grams of protein");

INSERT INTO DatabaseProject.mealHistory (user_id, calories, name, meal_date) VALUES
(1, 300, "Cheeseburger", now()),
(2, 200, "Steak", now()),
(3, 150, "Chicken salad", now()),
(4, 500, "Mashed potatoes", now()),
(4, 400, "Cheese pizza", now()),
(2, 300, "Mozzerella sticks", now());
