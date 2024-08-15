export interface InterviewQuestion {
    question: string;
    Answer: string;
}

export interface QuestionSectionProps {
    mockInterviewQuestions: InterviewQuestion[];
    activeQuestionIndex: number;
}

export interface RecordAnswerSectionProps {
    mockInterviewQuestions: InterviewQuestion[];
    activeQuestionIndex: number;
    interviewData: any;
}



export interface FeedBackData {
    id: string;
    mockId: string;
    question: string;
    correctAnswer: string;
    userAns: string;
    feedback: string;
    rating: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}


export interface InterViewData {
    id: string;
    jobDesc: string;
    jobExperience: string;
    jobPosition: string;
    jsonMockResp: string;
    userId: string;
    mockId?: string;
    createdAt?: Date;
    updatedAt?: Date;

}

export interface FeedbackItemProps {
    item: FeedBackData;
    index: number;
    getRatingColor: (rating: number) => string;
    getUserAnswerColor: (rating: number) => string;
}