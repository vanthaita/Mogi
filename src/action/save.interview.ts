"use server";

import prisma from '../utils/db'

export async function saveInterviewData({
    jsonMockResp,
    userId,
    jobPosition,
    jobExperience,
    jobDesc
}: {
    jsonMockResp: string,
    userId: string,
    jobPosition: string,
    jobExperience: string,
    jobDesc: string
}) {
    try {
        console.log(jsonMockResp, userId, jobPosition, jobExperience)
        const responseData = await prisma.mockInterview.create({
            data: {
                userId: userId,
                jsonMockResp: jsonMockResp,
                jobPosition: jobPosition,
                jobDesc: jobDesc,
                jobExperience: jobExperience,
            },
            select: {
                mockId: true,
            },
        });
        return responseData.mockId; 
    } catch (err) {
        console.error('Error saving interview data:', err);
    }
}
