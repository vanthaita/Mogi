'use client'
import React, { useEffect, useState } from 'react'
import { GetInterviewData } from '../../../../action/get.interview'
import Webcam from 'react-webcam'
import { StickyNote } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface InterViewData {
    id: string
    jobDesc: string
    jobExperience: string
    jobPosition: string
    jsonMockResp: string
    userId: string
}

const InterviewPage = ({ params }: { params: { interviewId: string } }) => {
    const [interviewData, setInterviewData] = useState<InterViewData | null>(null);
    const [isWebcamActive, setIsWebcamActive] = useState(false);
    const router = useRouter()
    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const data = await GetInterviewData({
            interviewId: params.interviewId
        }) as InterViewData;
        setInterviewData(data)
    }

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-100 p-6'>
            <h1 className='text-center text-4xl font-semibold mb-8'>Let&apos;s Get Started</h1>
            <div className='flex flex-col lg:flex-row gap-12 w-full max-w-4xl h-full justify-center items-center'>
                {/* Interview Details and Notes */}
                <div className='flex flex-col w-full lg:w-1/2 bg-white p-8 rounded-xl shadow-lg'>
                    {interviewData && (
                        <div>
                            <h2 className='text-3xl font-bold mb-4'>{interviewData.jobPosition}</h2>
                            <p className='text-lg text-gray-700 mb-6'>{interviewData.jobDesc}</p>
                            <p className='text-sm text-gray-500'>Experience: {interviewData.jobExperience}</p>
                        </div>
                    )}

                    <div className='border-2 border-yellow-400 bg-yellow-100 p-4 rounded-xl mt-8 flex items-center'>
                        <StickyNote className='text-yellow-500 w-6 h-6 mr-2' />
                        <span className='text-gray-700'>This is your note section. Add your notes here.</span>
                    </div>
                </div>

                {/* Image Webcam and Test Webcam */}
                <div className='w-full lg:w-1/2 flex flex-col items-center bg-white p-8 rounded-xl shadow-lg'>
                    <div className='w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg mb-6'>
                        {isWebcamActive ? (
                            <Webcam className='w-full h-full rounded-lg' />
                        ) : (
                            <span className='text-gray-500'>Webcam Preview</span>
                        )}
                    </div>
                    <button
                        onClick={() => setIsWebcamActive(prev => !prev)}
                        className='px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition'
                    >
                        {isWebcamActive ? 'Stop Webcam' : 'Start Webcam'}
                    </button>

                    <button
                        onClick={() => {
                            return router.push(`/dashboard/interview/${params.interviewId}/start`)
                        }}
                        className='px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition'
                    >
                        Start
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InterviewPage
