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
        <div>
            <h2>Question {activeQuestionIndex + 1}:</h2>
            <p>{mockInterviewQuestions[activeQuestionIndex]?.Question}</p>
        </div>
    );
};

export default QuestionSection;
