/*
  Warnings:

  - You are about to drop the column `createAt` on the `MockInterview` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MockInterview" DROP COLUMN "createAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "UserAnswer" (
    "id" TEXT NOT NULL,
    "mockId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "correctAnswer" TEXT NOT NULL,
    "userAns" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAnswer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserAnswer" ADD CONSTRAINT "UserAnswer_mockId_fkey" FOREIGN KEY ("mockId") REFERENCES "MockInterview"("mockId") ON DELETE RESTRICT ON UPDATE CASCADE;
