-- CreateTable
CREATE TABLE `Addresses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `street` VARCHAR(255) NULL,
    `city` VARCHAR(255) NULL,
    `province` VARCHAR(255) NULL,
    `country` VARCHAR(255) NOT NULL,
    `postal_code` VARCHAR(10) NOT NULL,
    `contact_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Addresses` ADD CONSTRAINT `Addresses_contact_id_fkey` FOREIGN KEY (`contact_id`) REFERENCES `Contacts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
