/*
  Warnings:

  - You are about to drop the `aluno` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `aluno` DROP FOREIGN KEY `Aluno_cursoId_fkey`;

-- DropTable
DROP TABLE `aluno`;

-- CreateTable
CREATE TABLE `Aluno2` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `cursoId` INTEGER NULL,

    UNIQUE INDEX `Aluno2_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Aluno2` ADD CONSTRAINT `Aluno2_cursoId_fkey` FOREIGN KEY (`cursoId`) REFERENCES `Curso`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
