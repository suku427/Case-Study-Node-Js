/*
  Warnings:

  - You are about to drop the `producttrend` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `visitorlog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `producttrend`;

-- DropTable
DROP TABLE `visitorlog`;

-- CreateTable
CREATE TABLE `product_trends` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trend_date` DATETIME(3) NOT NULL,
    `total_products` INTEGER NOT NULL,
    `products_added` INTEGER NOT NULL,
    `products_removed` INTEGER NOT NULL,

    UNIQUE INDEX `product_trends_trend_date_key`(`trend_date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `visitor_logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ipAddress` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
