CREATE TABLE `todo` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(150) NOT NULL,
	`isComplete` boolean NOT NULL DEFAULT false,
	CONSTRAINT `todo_id` PRIMARY KEY(`id`)
);
