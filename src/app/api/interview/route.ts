import { json } from 'stream/consumers';
import prisma from '../../../utils/db'
import {NextResponse} from 'next/server'
export async function POST(request: Request) {
    const data = await request.json();
    try {
        const responseData = await prisma.mockInterview.create({
            data: {
                userId: data.userId,
                jsonMockResp: JSON.stringify(data.jsonMockResp),
                jobPosition: data.jobPosition,
                jobDesc: data.jobDesc,
                jobExperience: data.jobExperience,
            },
            select: {
                mockId: true,
            },
        });
        return NextResponse.json({
            mockId: responseData.mockId,
            message: 'Hello from the serverless function!',
        })
    } catch (err) {
        console.error(err)
        return NextResponse.json({
            error: 'Server error',
        })
    }
}

