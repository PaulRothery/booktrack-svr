CREATE TABLE author (
	author_id MEDIUMINT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(20) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	rating SMALLINT,
	PRIMARY KEY (author_id),
	UNIQUE KEY  (first_name, last_name)
) ENGINE=InnoDB AUTO_INCREMENT=1;


insert into author (
  select author_id,	first_name,	last_name,	rating
  from test.author);
