'use client'
import React, { useState } from 'react'
import { Button } from '../../../components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../../../components/ui/dialog'
import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useRouter } from 'next/navigation'
import {
  ContextMenu,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { Loader2, Plus } from 'lucide-react'
import Image from 'next/image'
import { useAuth } from '@/context/auth.context'
const AddNewInterview = () => {
  const [openAddNewInterview, setOpenAddNewInterview] = useState(false)
  const [jobPosition, setJobPosition] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [experience, setExperience] = useState('')
  const [companyInfo, setCompanyInfo] = useState('') 
  const [interviewLanguage, setInterviewLanguage] = useState('') 
  const [additionalDetails, setAdditionalDetails] = useState('') 
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()
  const router = useRouter()

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}interview/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jobPosition,
          jobDesc: jobDescription,
          jobExperience: experience,
          companyInfo,
          interviewLanguage,
          additionalDetails,
          userId: user?.id,
        }),
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Failed to save interview');
      }
      const data = await response.json();
      if (data) {
        router.push(`/dashboard/interview/${data.interviewId}`);
      } else {
        console.error('Failed to save interview');
      }
    } catch (error) {
      console.error('Error occurred while processing the interview data:', error);
    } finally {
      setJobPosition('');
      setJobDescription('');
      setExperience('');
      setCompanyInfo('');
      setInterviewLanguage('');
      setAdditionalDetails('');
      setLoading(false);
    }
  };

  return (
    <div className='mt-4'>
      <div className='w-[300px]' onClick={() => setOpenAddNewInterview(!openAddNewInterview)}>
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-full cursor-pointer items-center justify-center rounded-md border border-border dark:border-darkText border-dashed text-sm font-base">
            <div className='flex justify-center items-center gap-x-2'>
              <Plus className='' />  
              <span className='text-lg gap font-medium'>
                Add new
              </span>
            </div>
          </ContextMenuTrigger>
        </ContextMenu>
      </div>

      <Dialog open={openAddNewInterview}>
        <DialogContent className="sm:max-w-[1440px]" >
          <DialogHeader>
            <DialogTitle className='text-3xl font-bold'>Tell us more about the job.</DialogTitle>
            <DialogDescription className='text-sm font-medium'>
              Provide details about the job you&apos;re interviewing for.
            </DialogDescription>
          </DialogHeader>
          <div className='flex gap-4'>
            <div className="flex flex-col gap-4 py-4 lg:w-2/3 w-full">
              <div className="flex flex-col gap-2">
                <Label htmlFor="role">Job Position/Role</Label>
                <Input
                  id="role"
                  placeholder="e.g., Frontend Developer"
                  value={jobPosition}
                  onChange={(e) => setJobPosition(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="tech-stack">Tech Stack</Label>
                <Input
                  id="tech-stack"
                  placeholder="e.g., React, TypeScript, TailwindCSS"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Input
                  id="experience"
                  placeholder="e.g., 3 years"
                  type="number"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="company-info">Company Information</Label>
                <Textarea
                  id="company-info"
                  placeholder="Provide additional information about the company"
                  value={companyInfo}
                  onChange={(e) => setCompanyInfo(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="interview-language">Interview Language</Label>
                <Input
                  id="interview-language"
                  placeholder="e.g., English, Japanese"
                  value={interviewLanguage}
                  onChange={(e) => setInterviewLanguage(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="additional-details">Additional Details</Label>
                <Textarea
                  id="additional-details"
                  placeholder="Add any additional details or requirements for the interview"
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                />
              </div>
            </div>

            <DialogDescription className=' p-4 rounded-lg flex justify-center h-full items-center hidden lg:block'>
              {/* <div className='flex flex-col items-center text-center space-y-4'>
                <div className='text-lg font-bold text-black'>
                  Upload PDF Introduction, Company Resume, or Details for AI Interview Mock/AI Coach Interview
                </div>
                <Input 
                  type='file'
                  accept='.pdf'
                  className="cursor-pointer   h-64 w-1/2 text-black rounded-md text-center"
                />
                 <p className="text-sm text-gray-600">
                    Please upload your PDF or resume. Ensure it&apos;s in the correct format and provides valuable information.
                </p>
              </div> */}
              <Image 
                src='/interview.svg'
                height={200}
                width={200}
                alt='interview'
                className=' w-full h-full object-contain '
              />
            </DialogDescription>
          </div>
          <DialogFooter className="flex justify-end gap-2">
            <Button variant='neutral' onClick={() => setOpenAddNewInterview(false)}>Cancel</Button>
            <Button className='bg-blue-300 text-black font-medium text-lg' type="button" onClick={handleSubmit}>{loading ? (<div className='flex justify-center items-center gap-2 text-white font-bold text-lg'><Loader2 className='animate-spin'/> <span>Waiting</span></div>) : 'Start Interview'} </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddNewInterview
