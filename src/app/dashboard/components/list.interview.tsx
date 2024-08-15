'use client'
import React, { useEffect, useState } from 'react';
import CardInterview from './card.interview';
import { GetAllInterviewData } from '@/action/get.interview';
import { useClerk } from '@clerk/nextjs';
import { FileQuestion } from 'lucide-react';
import { InterViewData } from '@/utils/type';

const ListInterview = () => {
  const { user } = useClerk();
  const [interviewList, setInterviewList] = useState<InterViewData[]>([]);

  useEffect(() => {
    const getInterviewList = async () => {
      const res = await GetAllInterviewData({
        userId: user?.id as string,
      });
      if (res) {
        setInterviewList(res as InterViewData[]);
      }
    };
    getInterviewList();
  }, [user?.id]);

  return (
    <div className=' relative w-full h-full mb-4'>
      <h2 className='text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2'>Interviews</h2>
      <div className='flex flex-col lg:flex-row gap-4 mb-4'>
        {interviewList.length > 0 ? (
          interviewList.map((interview: InterViewData) => (
            <CardInterview
              key={interview.id}
              role={interview.jobPosition}
              techStack={interview.jobDesc}
              experience={interview.jobExperience}
              questions={interview.jsonMockResp}
              time={interview.createdAt?.toLocaleString() || ''}
              mockId={interview?.mockId as string}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center absolute w-full h-full text-gray-500 dark:text-gray-400">
            <FileQuestion size={48} className="mt-10 w-36 h-36" />
            <p className='font-medium text-3xl'>No interviews available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListInterview;
