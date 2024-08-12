/*
  Warnings:

  - Added the required column `userId` to the `MockInterview` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MockInterview" ADD COLUMN     "userId" TEXT NOT NULL;
