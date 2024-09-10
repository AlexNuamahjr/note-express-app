/*
  Warnings:

  - You are about to drop the column `UserId` on the `EmailVerification` table. All the data in the column will be lost.
  - Added the required column `userId` to the `EmailVerification` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EmailVerification" DROP CONSTRAINT "EmailVerification_UserId_fkey";

-- AlterTable
ALTER TABLE "EmailVerification" DROP COLUMN "UserId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "EmailVerification" ADD CONSTRAINT "EmailVerification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
