import React from 'react'
import { Card } from '@/components/ui/card'

const CardInterview = ({ role, techStack, experience, questions, time } : {
    role: string,
    techStack: string,
    experience: string,
    questions: string,
    time: string
}) => {
    return (
        <Card className='p-4 border-4 border-black bg-white w-[20rem] max-h-[14rem] '>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <span className='text-sm font-semibold text-black'>Job Position/Role:</span>
                        <span className='text-sm text-black'>{role}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='text-sm font-semibold text-black'>Tech Stack:</span>
                        <span className='text-sm text-black'>{techStack}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='text-sm font-semibold text-black'>Years of Experience:</span>
                        <span className='text-sm text-black'>{experience}</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-sm font-semibold text-black'>{questions}</span>
                    <span className='text-sm text-black'>{time}</span>
                </div>
            </div>
        </Card>
    )
}

export default CardInterview
