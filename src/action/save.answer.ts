"use server";

import prisma from '../utils/db'
export async function saveAnswerQuestion({
    mockId,        
    question,      
    correctAnswer, 
    userAns,       
    feedback,      
    rating,        
    userId,    
}: {
    mockId: string,       
    question: string,      
    correctAnswer: string,
    userAns: string,       
    feedback: string,      
    rating: string,        
    userId: string    
}) {
    try {
        console.log("Running")
        const answer = await prisma.userAnswer.create({
            data: {
                mockId: mockId,
                question: question,
                correctAnswer: correctAnswer,
                userAns: userAns,
                feedback: feedback,
                rating: rating,
                userId: userId,
            },
        });
        return answer;
    } catch (err) {
        console.error(err);
    }
}
