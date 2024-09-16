/*
  Warnings:

  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "gender" VARCHAR(10) NOT NULL,
ADD COLUMN     "phoneNumber" VARCHAR(13) NOT NULL;
