-- CreateTable
CREATE TABLE `Curso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `cargaHoraria` INTEGER NOT NULL,
    `nivel` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aluno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `cursoId` INTEGER NULL,

    UNIQUE INDEX `Aluno_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_cursoId_fkey` FOREIGN KEY (`cursoId`) REFERENCES `Curso`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
