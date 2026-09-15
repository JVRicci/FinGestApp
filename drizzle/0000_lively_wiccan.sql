CREATE TABLE `bills` (
	`id` text PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`amount` integer NOT NULL,
	`dueDate` text,
	`type` text DEFAULT 'expense',
	`times` integer DEFAULT 1,
	`status` text NOT NULL,
	`payment_method` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `incomes` (
	`id` text PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`amount` integer NOT NULL,
	`received_date` integer NOT NULL,
	`category` text NOT NULL,
	`status` text NOT NULL,
	`payment_method` text,
	`created_at` integer NOT NULL,
	`updatedAt` integer NOT NULL
);
