'use client'
import React, { useEffect, useState } from 'react'
import { getFeedBackData } from '@/action/get.feedback'

const FeedBackPage = ({ params }: { params: { interviewId: string } }) => {
    const [feedBackData, setFeedBackData] = useState<any>(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getFeedBackData({
                interviewId: params.interviewId
            })
            setFeedBackData(data)
        }

        fetchData();
    }, [params.interviewId])

    return (
        <div>
            FeedBackPage
            {feedBackData && (
                <pre>{JSON.stringify(feedBackData, null, 2)}</pre>
            )}
        </div>
    )
}

export default FeedBackPage
