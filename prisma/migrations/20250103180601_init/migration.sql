-- CreateTable
CREATE TABLE "Enfants" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Enfants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Autres" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Autres_pkey" PRIMARY KEY ("id")
);
