CREATE TABLE book (
	book_id MEDIUMINT NOT NULL AUTO_INCREMENT,
	title VARCHAR(50) NOT NULL,
	author_id MEDIUMINT NOT NULL,
	series VARCHAR(20),
	read_status BOOLEAN NOT NULL,
	own_status BOOLEAN NOT NULL,
	year INT NOT NULL,
	PRIMARY KEY (book_id),
	UNIQUE KEY (title, author_id)
) ENGINE=InnoDB AUTO_INCREMENT=1;
