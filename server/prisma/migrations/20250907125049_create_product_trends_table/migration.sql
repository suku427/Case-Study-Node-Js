-- CreateTable
CREATE TABLE `ProductTrend` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trend_date` DATETIME(3) NOT NULL,
    `total_products` INTEGER NOT NULL,
    `products_added` INTEGER NOT NULL,
    `products_removed` INTEGER NOT NULL,

    UNIQUE INDEX `ProductTrend_trend_date_key`(`trend_date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
