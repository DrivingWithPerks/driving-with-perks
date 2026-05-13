CREATE TABLE `dealers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(30) NOT NULL,
	`dealershipName` varchar(255) NOT NULL,
	`city` varchar(100) NOT NULL,
	`province` varchar(50) NOT NULL,
	`status` enum('pending','approved','rejected','suspended') NOT NULL DEFAULT 'pending',
	`stripeCustomerId` varchar(255),
	`totalLeadsPurchased` int DEFAULT 0,
	`totalSpent` decimal(12,2) DEFAULT '0',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `dealers_id` PRIMARY KEY(`id`),
	CONSTRAINT `dealers_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `emailSequences` (
	`id` int AUTO_INCREMENT NOT NULL,
	`leadId` int NOT NULL,
	`sequenceType` enum('immediate','one_hour','next_day','weekly_nurture') NOT NULL,
	`emailTemplate` varchar(100) NOT NULL,
	`status` enum('pending','sent','failed','bounced') NOT NULL DEFAULT 'pending',
	`sentAt` timestamp,
	`failureReason` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `emailSequences_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `leadAnalytics` (
	`id` int AUTO_INCREMENT NOT NULL,
	`date` varchar(20) NOT NULL,
	`totalLeads` int DEFAULT 0,
	`newLeads` int DEFAULT 0,
	`contactedLeads` int DEFAULT 0,
	`convertedLeads` int DEFAULT 0,
	`tier1Leads` int DEFAULT 0,
	`tier2Leads` int DEFAULT 0,
	`tier3Leads` int DEFAULT 0,
	`totalRevenue` decimal(12,2) DEFAULT '0',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `leadAnalytics_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `leadPurchases` (
	`id` int AUTO_INCREMENT NOT NULL,
	`dealerId` int NOT NULL,
	`leadId` int NOT NULL,
	`tier` enum('tier1','tier2','tier3') NOT NULL,
	`price` decimal(10,2) NOT NULL,
	`status` enum('pending','completed','failed','refunded') NOT NULL DEFAULT 'pending',
	`stripePaymentIntentId` varchar(255),
	`purchasedAt` timestamp NOT NULL DEFAULT (now()),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `leadPurchases_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `smsSequences` (
	`id` int AUTO_INCREMENT NOT NULL,
	`leadId` int NOT NULL,
	`sequenceType` enum('immediate','one_hour','next_day','weekly_nurture') NOT NULL,
	`messageTemplate` varchar(160) NOT NULL,
	`status` enum('pending','sent','failed','bounced') NOT NULL DEFAULT 'pending',
	`sentAt` timestamp,
	`failureReason` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `smsSequences_id` PRIMARY KEY(`id`)
);
