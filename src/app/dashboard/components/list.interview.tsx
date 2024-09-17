'use client'
import React, { useEffect, useState } from 'react';
import CardInterview from './card.interview';
import { FileQuestion } from 'lucide-react';
import { InterViewData } from '@/utils/type';
import { useAuth } from '@/context/auth.context';

const ListInterview = () => {
  const { user } = useAuth();
  const [interviewList, setInterviewList] = useState<InterViewData[]>([]);

  useEffect(() => {
    const getInterviewList = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}interview/user/${user?.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setInterviewList(data as InterViewData[]);
      } catch (error) {
        console.error("Error fetching interview data: ", error);
      }
    };
  
    if (user?.id) {
      getInterviewList();
    }
  }, [user?.id]);
  
  
  return (
    <div className='w-full mb-4'>
      <h2 className='text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2'>Interviews</h2>
      <div className='flex flex-wrap gap-4 mb-4 mx-auto'>
        {interviewList.length > 0 ? (
          interviewList.map((interview: InterViewData) => (
            <CardInterview
              key={interview.id}
              role={interview.jobPosition}
              techStack={interview.jobDesc}
              experience={interview.jobExperience}
              questions={interview.jsonMockResp}
              time={interview.createdAt?.toLocaleString() || ''}
              mockId={interview?.id as string}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center pr-8 absolute w-full h-full text-gray-500">
            <FileQuestion size={48} className="mt-24 w-36 h-36" />
            <p className='font-medium text-3xl'>No interviews available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListInterview;
