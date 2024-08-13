import React from 'react';
import AddNewInterview from './_components/add.new.interview';
import ListInterview from './_components/list.interview';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Card } from '@/components/ui/card';

const DashboardPage = () => {
  
  return (
    <div className='p-8 relative h-full'>
      <div className="flex-1 h-[35%] ">
        <span className='text-xl font-bold'>Add new Interview</span>
        <AddNewInterview />
      </div>
      <div className='h-2/3'>
        <ListInterview />
      </div>
    </div>
  );
};

export default DashboardPage;
