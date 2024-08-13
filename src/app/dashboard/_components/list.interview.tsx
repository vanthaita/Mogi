'use client'
import React, { useState } from 'react';
import CardInterview from './card.interview';

const ListInterview = () => {
    const interviewsData = [
        {
          role: 'Software Engineer',
          techStack: 'React, Node.js, GraphQL',
          experience: '5+ Years',
          questions: '10 questions',
          time: '3 minutes',
        },
        {
          role: 'Frontend Developer',
          techStack: 'Vue, JavaScript, CSS',
          experience: '3+ Years',
          questions: '8 questions',
          time: '2 minutes',
        },
        {
          role: 'Backend Developer',
          techStack: 'Python, Django, PostgreSQL',
          experience: '7+ Years',
          questions: '12 questions',
          time: '4 minutes',
        },
    ];
    
  const [currentPage, setCurrentPage] = useState(1);
  const interviewsPerPage = 4; // Number of interviews per page
  const totalPages = Math.ceil(interviewsData.length / interviewsPerPage);

  // Get the current interviews based on pagination
  const currentInterviews = interviewsData.slice(
    (currentPage - 1) * interviewsPerPage,
    currentPage * interviewsPerPage
  );

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <>
      <h2 className='text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2'>Interviews</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {currentInterviews.map((interview: any, index: any) => (
          <CardInterview
            key={index}
            role={interview.role}
            techStack={interview.techStack}
            experience={interview.experience}
            questions={interview.questions}
            time={interview.time}
          />
        ))}
      </div>
    </>
  );
};

export default ListInterview;
