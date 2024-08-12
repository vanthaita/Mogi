/*
  Warnings:

  - A unique constraint covering the columns `[mockId]` on the table `MockInterview` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MockInterview_mockId_key" ON "MockInterview"("mockId");
