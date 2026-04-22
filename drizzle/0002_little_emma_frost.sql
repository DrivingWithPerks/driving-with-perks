ALTER TABLE `leads` ADD `notes` text;--> statement-breakpoint
ALTER TABLE `leads` ADD `qualityTier` enum('tier1','tier2','tier3') DEFAULT 'tier1';--> statement-breakpoint
ALTER TABLE `leads` ADD `qualityScore` int DEFAULT 0;--> statement-breakpoint
ALTER TABLE `leads` ADD `routedTo` varchar(255);--> statement-breakpoint
ALTER TABLE `leads` ADD `routedAt` timestamp;--> statement-breakpoint
ALTER TABLE `leads` ADD `routedPrice` decimal(10,2);--> statement-breakpoint
ALTER TABLE `leads` DROP COLUMN `adminNotes`;