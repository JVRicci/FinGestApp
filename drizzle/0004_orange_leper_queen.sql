PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_incomes` (
	`id` text PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`amount` integer NOT NULL,
	`received_date` integer,
	`category` text DEFAULT 'daily' NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`payment_method` text,
	`created_at` integer NOT NULL,
	`updatedAt` integer NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_incomes`("id", "description", "amount", "received_date", "category", "status", "payment_method", "created_at", "updatedAt") SELECT "id", "description", "amount", "received_date", "category", "status", "payment_method", "created_at", "updatedAt" FROM `incomes`;--> statement-breakpoint
DROP TABLE `incomes`;--> statement-breakpoint
ALTER TABLE `__new_incomes` RENAME TO `incomes`;--> statement-breakpoint
PRAGMA foreign_keys=ON;