import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import React from 'react';

interface InterviewQuestion {
    Question: string;
    Answer: string;
}

interface QuestionSectionProps {
    mockInterviewQuestions: InterviewQuestion[];
    activeQuestionIndex: number;
}

const QuestionSection: React.FC<QuestionSectionProps> = ({ mockInterviewQuestions, activeQuestionIndex }) => {
    return (
        <Card className='p-4 bg-white'>
            <div className='flex gap-4'>
                {mockInterviewQuestions.map((_, index: number) => (
                    <Button 
                        key={index} 
                        variant='neutral' 
                        className={`rounded-full ${activeQuestionIndex === index ? 'bg-blue-200' : ''}`}>
                        Question {index + 1}
                    </Button>
                ))}
            </div>
            <h2 className='text-3xl font-bold mt-8'>Question {activeQuestionIndex + 1}:</h2>
            <p className='text-2xl'>{mockInterviewQuestions[activeQuestionIndex]?.Question}</p>
        </Card>
    );
};

export default QuestionSection;
