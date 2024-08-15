'use client'
import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import useSpeechToText from 'react-hook-speech-to-text';
import { chatSession } from '@/utils/gemini.ai';
import { saveAnswerQuestion } from '@/action/save.answer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mic } from 'lucide-react';
import Image from 'next/image';
import { InterviewQuestion } from '@/utils/type';
import { RecordAnswerSectionProps } from '@/utils/type';

const RecordAnswerSection: React.FC<RecordAnswerSectionProps> = ({
    interviewData,
    mockInterviewQuestions,
    activeQuestionIndex
}) => {
    const webcamRef = useRef<Webcam>(null);
    const [userAnswer, setUserAnswer] = useState('');
    const {
        error,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    useEffect(() => {
        results.map((result: any) => {
            setUserAnswer(prevAnswer => prevAnswer + result?.transcript);
        });
    }, [results]);

    const saveUserAnswer = async () => {
        if (isRecording) {
            stopSpeechToText();
            if (userAnswer.length < 1) {
                return;
            }
            const FeedBackPromptTemplate = process.env.NEXT_PUBLIC_FEEDBACK_PROMPT || ''
            const feedbackPrompt = FeedBackPromptTemplate
                .replace("{{mockInterviewQuestions[activeQuestionIndex].question}}", mockInterviewQuestions[activeQuestionIndex].question)
                .replace("{{userAnswer}}", userAnswer)
            const responseFormAi = await chatSession.sendMessage(feedbackPrompt);

            const mockJsonResponse = JSON.parse(responseFormAi.response.text());

            const responseData = await saveAnswerQuestion({
                mockId: interviewData.mockId,
                question: mockInterviewQuestions[activeQuestionIndex].question,
                correctAnswer: mockInterviewQuestions[activeQuestionIndex].Answer,
                userAns: userAnswer,
                feedback: mockJsonResponse.feedback,
                rating: mockJsonResponse.rating.toString(),
                userId: interviewData.userId,
            })
            
            if (responseData) {
                console.log('Answer saved successfully');
                return;
            }
        } else {
            startSpeechToText();
        }
    }
    
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className='w-full h-full relative flex items-center justify-center rounded-lg '>
                {true ? (
                    <Webcam 
                        className='max-w-full max-h-full w-auto h-auto rounded-lg object-contain' 
                        style={{ width: '640px', height: '480px' }} 
                    />
                ) : (
                    <div className=' flex flex-col justify-center items-center'>
                        <Image 
                            src='/cam.svg'
                            height={200}
                            width={200}
                            alt='cam'
                        />
                        <span className='text-gray-500 mt-4'>Webcam Preview</span>
                    </div>
                )}
            </div>
            <div className="w-full flex items-center justify-center mb-10">
                <Button variant="neutral" onClick={saveUserAnswer}>
                    {isRecording ? (
                        <div className="flex gap-4 justify-center items-center">
                            <Mic />
                            <span className="text-red-500 text-lg font-medium">Stop Recording</span>
                        </div>
                    ) : (
                        'Start Recording'
                    )}
                </Button>
            </div>
        </div>
    );
};

export default RecordAnswerSection;
