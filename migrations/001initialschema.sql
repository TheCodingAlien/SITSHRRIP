-- up
CREATE TABLE tests (
	TestID integer primary key,
	UserID integer,
	QuestionID integer,
	Response integer
    
);

CREATE TABLE options ( 
	OptionID integer primary key,
	AnswerText text,
	QuestionID integer
);

CREATE TABLE questions (
	QuestionID integer primary key,
	QuestionText text,
	CorrectChoice integer
);

CREATE TABLE users (
	UserID integer primary key,
	Name text,
	Email text
);

-- down
DROP TABLE tests;

DROP TABLE options;

DROP TABLE questions;

DROP TABLE users;
