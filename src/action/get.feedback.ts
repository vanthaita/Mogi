"use server"
import prisma from '../utils/db'

export async function getFeedBackData({interviewId} : {interviewId: string}) {
    const interviewData = await prisma.mockInterview.findFirst({
        where: { 
            mockId: interviewId 
        },
        select: {
            id: true,
            userAnswers: true
        },
    });
    return interviewData
}