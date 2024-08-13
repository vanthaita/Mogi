'use client'
import React, { useEffect, useState } from 'react'
import { getFeedBackData } from '@/action/get.feedback'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import FeedbackCard from './_components/feedback.card'
const FeedBackPage = ({ params }: { params: { interviewId: string } }) => {
    const [feedBackData, setFeedBackData] = useState<any>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const router = useRouter();

    const feedback = [
        {
            "id": "b84b12f2-34d1-4fbb-87a5-57d71b2e7aef",
            "mockId": "a67c3f87-1f63-4a0b-a9eb-2f9d4b4cdd12",
            "question": "Can you describe a time when you had to overcome a challenging situation?",
            "correctAnswer": "A challenging situation I faced was during a project where the deadline was unexpectedly moved up by two weeks. To overcome this, I reprioritized tasks, delegated more effectively, and worked extra hours. The project was completed on time and met all the quality standards.",
            "userAns": "I had a tough time with a project deadline that was moved up. I worked harder and finished it on time.",
            "feedback": "Your answer is on the right track but lacks specific details. Try to highlight the specific actions you took to handle the situation and the outcome. Mentioning how you reprioritized tasks or managed the team would strengthen your answer.",
            "rating": "3",
            "userId": "d45e6d42-8c7b-45d9-8491-4fbd0c2d41a9",
            "createdAt": "2024-08-13T08:00:00Z",
            "updatedAt": "2024-08-13T08:30:00Z"
        }, 
        {
            "id": "b84b12f2-34d1-4fbb-87a5-57d71b2e7aef",
            "mockId": "a67c3f87-1f63-4a0b-a9eb-2f9d4b4cdd12",
            "question": "Can you describe a time when you had to overcome a challenging situation?",
            "correctAnswer": "A challenging situation I faced was during a project where the deadline was unexpectedly moved up by two weeks. To overcome this, I reprioritized tasks, delegated more effectively, and worked extra hours. The project was completed on time and met all the quality standards.",
            "userAns": "I had a tough time with a project deadline that was moved up. I worked harder and finished it on time.",
            "feedback": "Your answer is on the right track but lacks specific details. Try to highlight the specific actions you took to handle the situation and the outcome. Mentioning how you reprioritized tasks or managed the team would strengthen your answer.",
            "rating": "3",
            "userId": "d45e6d42-8c7b-45d9-8491-4fbd0c2d41a9",
            "createdAt": "2024-08-13T08:00:00Z",
            "updatedAt": "2024-08-13T08:30:00Z"
        }, 
        
    ]
    useEffect(() => {
        const fetchData = async () => {
            const data = await getFeedBackData({
                interviewId: params.interviewId
            })
            setFeedBackData(data)
        }

        fetchData();
    }, [params.interviewId])

    const getRatingColor = (rating: number) => {
        if (rating >= 8) return 'bg-green-500';
        if (rating >= 5) return 'bg-yellow-500';
        return 'bg-red-500';
    }

    const getUserAnswerColor = (rating: number) => {
        if (rating >= 8) return 'bg-green-100';
        if (rating >= 5) return 'bg-yellow-100';
        return 'bg-red-100';
    }

    return (
        <Card className='w-full h-full p-8 bg-[#f7f7f7] border-2 border-black flex flex-col justify-between'>
            <div className='flex flex-col gap-6'>
                <h1 className='text-2xl font-bold mb-6'>Feedback</h1>
                {feedback && (
                    <FeedbackCard
                        item={feedback[currentQuestionIndex]}
                        index={currentQuestionIndex}
                        getRatingColor={getRatingColor}
                        getUserAnswerColor={getUserAnswerColor}
                    />
                )}
            </div>
            <div className='w-full flex justify-end gap-4'>
                {currentQuestionIndex > 0 &&
                    <Button
                        variant='neutral'
                        onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                    >
                        Previous Question
                    </Button>
                }
                {currentQuestionIndex !== feedback?.length - 1 &&
                    <Button
                        variant='neutral'
                        onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                    >
                        Next Question
                    </Button>
                }
                {currentQuestionIndex === feedback?.length - 1 &&
                    <Button
                        variant='neutral'
                        onClick={() => router.push(`/dashboard`)}
                    >
                        End feedback
                    </Button>
                }
            </div>
        </Card>
    )
}

export default FeedBackPage
