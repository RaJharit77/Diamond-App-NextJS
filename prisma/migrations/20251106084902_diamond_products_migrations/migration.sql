/*
  Warnings:

  - The primary key for the `Autres` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Enfants` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Femmes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Hommes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Purchase` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Autres" DROP CONSTRAINT "Autres_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Autres_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Autres_id_seq";

-- AlterTable
ALTER TABLE "Enfants" DROP CONSTRAINT "Enfants_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Enfants_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Enfants_id_seq";

-- AlterTable
ALTER TABLE "Femmes" DROP CONSTRAINT "Femmes_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Femmes_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Femmes_id_seq";

-- AlterTable
ALTER TABLE "Hommes" DROP CONSTRAINT "Hommes_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Hommes_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Hommes_id_seq";

-- AlterTable
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Purchase_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";
