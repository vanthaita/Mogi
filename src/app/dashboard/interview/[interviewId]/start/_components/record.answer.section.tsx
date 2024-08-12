'use client'
import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import useSpeechToText from 'react-hook-speech-to-text';
import { chatSession } from '@/utils/gemini.ai';
import { saveAnswerQuestion } from '@/action/save.answer';

interface InterviewQuestion {
    Question: string;
    Answer: string;
}

interface RecordAnswerSectionProps {
    mockInterviewQuestions: InterviewQuestion[];
    activeQuestionIndex: number;
    interviewData: any;
}

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

            const feedbackPrompt = "Question: " + mockInterviewQuestions[activeQuestionIndex].Question +
            ", User Answer: " + "Hello my name is" + ", Based on the question and user's answer, " +
            "please provide a rating (rating 1 to 10) for the answer and feedback in the areas of improvement. " +
            "Please respond in JSON format with 'rating' and 'feedback' fields.";
            const responseFormAi = await chatSession.sendMessage(feedbackPrompt);

            const mockJsonResponse = JSON.parse(responseFormAi.response.text());

            const responseData = await saveAnswerQuestion({
                mockId: interviewData.mockId,
                question: mockInterviewQuestions[activeQuestionIndex].Question,
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
        <div>
            <Webcam ref={webcamRef} />
            <button onClick={saveUserAnswer}>
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
            <div>
                {userAnswer}
            </div>
        </div>
    );
};

export default RecordAnswerSection;
