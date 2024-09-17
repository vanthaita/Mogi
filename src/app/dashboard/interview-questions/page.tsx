'use client'
import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input'; 
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'; 
import { Button } from '@/components/ui/button'; 
import { InterViewData } from '@/utils/type';
import { useAuth } from '@/context/auth.context';
import Link from 'next/link';

const InterviewCard: React.FC<{ interview: InterViewData }> = ({ interview }) => {
    const mockResponse = JSON.parse(interview.jsonMockResp);
    console.log(mockResponse);
    return (
      <Card className="w-full sm:w-[50%] lg:w-[32%] p-4 relative bg-white cursor-pointer">
          <Link href={`/dashboard/interview/${interview.id}/`}>
            <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800 break-words">{interview.jobPosition.toUpperCase()}</CardTitle>
                <CardDescription className="text-sm text-gray-600 break-words">{interview.jobDesc}</CardDescription>
            </CardHeader>
            <CardContent className="text-lg space-y-1 break-words">
                <p><strong>Experience:</strong> {interview.jobExperience}</p>
                <p><strong>Company:</strong> {interview.companyInfo || 'Mogi'}</p>
                <p className='text-lg'><strong>Q:</strong> {mockResponse.questions.length || 0}</p>
            </CardContent>
          </Link>
      </Card>    
    );                                                                
};                          
const InterviewQuestionList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useAuth();
  const [mockInterviewList, setMockInterviewList] = useState<InterViewData[]>([]);

  useEffect(() => {
    const getInterviewList = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}interview/search`, {
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
        console.log(data.mockInterviews) 
        setMockInterviewList(data.mockInterviews as InterViewData[]);
      } catch (error) {
        console.error("Error fetching interview data: ", error);
      }
    };
    getInterviewList();
  }, []);

  return (
    <div className="mx-auto p-4">
        <Card className="mb-6">
            <Input
                type="text"
                placeholder="Search by role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </Card>
        <div className="flex flex-wrap gap-4 justify-center">
            {mockInterviewList.length > 0 ? (
                mockInterviewList.map((interview) => (
                    <InterviewCard key={interview.id} interview={interview} />
                ))
                ) : (
                <p className="text-gray-600 mb-10">No results found for &#34;{searchTerm}&#34;</p>
            )}
        </div>
    </div>
  );
};

export default InterviewQuestionList;
