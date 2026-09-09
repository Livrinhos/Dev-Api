-- CreateTable
CREATE TABLE `Carro` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ano` INTEGER NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `preco` INTEGER NOT NULL,
    `hp` INTEGER NOT NULL,
    `velocidade_maxima` INTEGER NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
