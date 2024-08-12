-- CreateTable
CREATE TABLE "MockInterview" (
    "id" TEXT NOT NULL,
    "jsonMockResp" TEXT NOT NULL,
    "jobPosition" TEXT NOT NULL,
    "jobDesc" TEXT NOT NULL,
    "jobExperience" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "mockId" TEXT NOT NULL,

    CONSTRAINT "MockInterview_pkey" PRIMARY KEY ("id")
);
