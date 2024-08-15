import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import React from 'react';
import { QuestionSectionProps } from '@/utils/type';
import { InterviewQuestion } from '@/utils/type';
import { Volume2Icon } from 'lucide-react';
const QuestionSection: React.FC<QuestionSectionProps> = ({ mockInterviewQuestions, activeQuestionIndex }) => {
    
    const textToSpeech = (question: string) => {
        if('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(question);
            window.speechSynthesis.speak(speech);
        } else {
            console.error('Speech synthesis is not supported in this browser.');
        }
    };
    
    const currentQuestion = mockInterviewQuestions[activeQuestionIndex]?.question || 'No question available';

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
            <h2 className='text-3xl font-bold mt-6'>Question {activeQuestionIndex + 1}:</h2>
            <p className='text-2xl mt-1'>{currentQuestion}</p>
            <Volume2Icon 
                className='cursor-pointer mt-4 w-8 h-8' 
                onClick={() => textToSpeech(currentQuestion)} 
                aria-label="Read question aloud"
            />
        </Card>
    );
};
export default QuestionSection;
