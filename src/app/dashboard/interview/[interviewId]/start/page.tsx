'use client';
import React, { useEffect, useState } from 'react';
import QuestionSection from './_components/question.section';
import { GetInterviewData } from '@/action/get.interview';
import RecordAnswerSection from './_components/record.answer.section';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
interface InterviewQuestion {
    Question: string;
    Answer: string;
}

interface InterViewData {
    id: string;
    jobDesc: string;
    jobExperience: string;
    jobPosition: string;
    jsonMockResp: string;
    userId: string;
}

const InterviewPage = ({ params }: { params: { interviewId: string } }) => {
    const [interviewData, setInterviewData] = useState<InterViewData | null>(null);
    const [mockInterviewQuestions, setMockInterviewQuestions] = useState<InterviewQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const router = useRouter()
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await GetInterviewData({
            interviewId: params.interviewId
        }) as InterViewData;
        const parsedQuestions = JSON.parse(data.jsonMockResp).questions as InterviewQuestion[];
        console.log(parsedQuestions)
        setMockInterviewQuestions(parsedQuestions);
        setInterviewData(data);
    };
    return (
        <div>
            <QuestionSection
                mockInterviewQuestions={mockInterviewQuestions}
                activeQuestionIndex={currentQuestionIndex}
            />
            <RecordAnswerSection
                mockInterviewQuestions={mockInterviewQuestions}
                activeQuestionIndex={currentQuestionIndex}
                interviewData={interviewData}
            />
            {currentQuestionIndex > 0 && <Button onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}>Previous Question</Button> }
            {currentQuestionIndex != mockInterviewQuestions.length -1 && <Button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>Next Question</Button> }
            {currentQuestionIndex == mockInterviewQuestions.length -1 && <Button onClick={() => { return router.push(`/dashboard`)}}>End Question</Button> }
        </div>
    );
};

export default InterviewPage;
