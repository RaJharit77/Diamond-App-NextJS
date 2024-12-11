-- DropIndex
DROP INDEX "Purchase_email_key";

-- AlterTable
ALTER TABLE "Purchase" ADD COLUMN "address" TEXT;
ALTER TABLE "Purchase" ADD COLUMN "cardNumber" TEXT;
ALTER TABLE "Purchase" ADD COLUMN "city" TEXT;
ALTER TABLE "Purchase" ADD COLUMN "country" TEXT;
ALTER TABLE "Purchase" ADD COLUMN "phone" TEXT;
