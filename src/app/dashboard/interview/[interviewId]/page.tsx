'use client'
import React, { useEffect, useState } from 'react'
import { GetInterviewData } from '../../../../action/get.interview'
import Webcam from 'react-webcam'
import { Lightbulb, StickyNote } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from '@/components/ui/alert-dialog'
import { InterViewData } from '@/utils/type'

const InterviewPage = ({ params }: { params: { interviewId: string } }) => {
    const [interviewData, setInterviewData] = useState<InterViewData | null>(null)
    const [isWebcamActive, setIsWebcamActive] = useState(false)
    const [alertToStart, setAlertToStart] = useState(false)    
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await GetInterviewData({
            interviewId: params.interviewId
        }) as InterViewData
        setInterviewData(data)
    }

    return (
        <div className='w-full h-full p-8 '>
            <div className='flex flex-col w-full h-full gap-x-4'>
                <span className='font-bold text-4xl text-center mb-8'>Let&apos;s Get Started with Your Mock Interview</span>
                <div className='flex flex-col lg:flex-row w-full h-full gap-8'>
                    {/* Job Description & Details */}
                    <div className=' w-2/3 h-full flex flex-col gap-8 justify-between'>
                        <Card className='border-black border-2 bg-white shadow-lg h-2/3'>
                            <CardContent className='p-6'>
                                <h2 className='text-3xl font-bold mb-4'>Job Description</h2>
                                <p className='mb-4 text-lg'><strong>Position:</strong> {interviewData?.jobPosition}</p>
                                <p className='mb-4 text-lg'><strong>Experience:</strong> {interviewData?.jobExperience}</p>
                                <p className='text-lg'><strong>Job Description:</strong> {interviewData?.jobDesc}</p>
                            </CardContent>
                        </Card>
                        <Card className='border-black border-2 bg-yellow-300 shadow-lg'>
                            <CardContent className='p-6 flex flex-col items-start'>
                                <Lightbulb className='w-8 h-8 text-black' />
                                <h2 className='text-3xl font-bold mt-4 text-black'>Important Notes Before Starting:</h2>
                                <span className='text-lg mt-2 text-black'>
                                    Before beginning your interview, please take a moment to review the key points and guidelines provided on the web. 
                                    These notes are crucial for ensuring that you are well-prepared and confident as you proceed. 
                                    Additionally, after completing your interview, you can return here to add any feedback or reflections on your performance. 
                                    This will help you track your progress and make improvements for future interviews.
                                </span>
                            </CardContent>
                        </Card>
                    </div>
                    {/* Webcam & Notes */}
                    <div className='flex flex-col w-2/3 h-full'>
                    {/* Webcam Section */}
                    <Card className='flex-1 flex flex-col items-center justify-between w-full h-full'>
                        <div className='w-full h-full bg-gray-200 relative flex items-center justify-center rounded-lg mb-6'>
                            {isWebcamActive ? (
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
                        <div className='w-full justify-center items-center mb-10 flex gap-x-4'>
                            <Button
                                variant='neutral'
                                onClick={() => setIsWebcamActive(prev => !prev)}
                                className='px-6 py-3 text-lg rounded-md transition'
                            >
                                {isWebcamActive ? 'Stop Webcam' : 'Start Webcam'}
                            </Button>
                            <Button
                                variant='neutral'
                                onClick={() => setAlertToStart(!alertToStart)} 
                               
                                className='px-6 py-3 text-lg rounded-md transition'
                            >
                                Start interview
                            </Button>
                            <AlertDialog open={alertToStart}>
                                <AlertDialogTrigger asChild>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Have you prepared and tested everything? Make sure to carefully read the notes before starting the mock interview.
                                    </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                    <AlertDialogCancel
                                        onClick={() => setAlertToStart(!alertToStart)} 
                                    >Cancel</AlertDialogCancel>
                                    <AlertDialogAction 
                                        onClick={() => {
                                            return router.push(`/dashboard/interview/${params.interviewId}/start`)
                                        }}
                                    >
                                        Start interview
                                    </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </Card>
                </div>

                </div>
            </div>
        </div>
    )
}

export default InterviewPage
