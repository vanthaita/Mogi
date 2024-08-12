"use server"
import prisma from '../utils/db'

export async function GetInterviewData({interviewId} : {interviewId: string}) {
    const FeedBackData = await prisma.mockInterview.findFirst({
        where: { 
            mockId: interviewId 
        },
        select: {
            id: true,
            jobPosition: true,
            jobDesc: true,
            jobExperience: true,
            userId: true,
            createdAt: true,
            updatedAt: true,
            jsonMockResp: true,
        },
    });
    return FeedBackData
}