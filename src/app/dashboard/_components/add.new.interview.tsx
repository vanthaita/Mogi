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
  DialogTrigger,
} from '../../../components/ui/dialog'
import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import {chatSession} from '../../../utils/gemini.ai'
import { useRouter } from 'next/navigation'
import { useClerk } from '@clerk/nextjs'
import { saveInterviewData } from '@/action/save.interview'
const AddNewInterview = () => {
    const [openAddNewInterview, setOpenAddNewInterview] = useState(false)
    const [jobPosition, setJobPosition] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [experience, setExperience] = useState('')
    const [loading, setLoading] = useState(false);
    const [jsonResponse, setJsonResponse] = useState([]);
    const {user} = useClerk()
    const router = useRouter()
    const handleSubmit = async () => {
        setLoading(true)
        const interviewData = {
          jobPosition,
          jobDescription,
          experience,
        }
    
        const InputPrompt = `
            Job Position: ${jobPosition}, Job Description: ${jobDescription} Year of Experience: ${experience}, 
            Depends on this information please give me 5 interview question with Answered in Json Fomat, 
            Give Question and Answered as field in JSON`
          
        try {
          const res = await chatSession.sendMessage(InputPrompt)
          const MockJsonResponse = JSON.parse(res.response.text())
          setJsonResponse(MockJsonResponse)
    
          if (MockJsonResponse && user && user.id) {
            const response = await saveInterviewData({
              userId: user.id as string,
              jobPosition,
              jobDesc: jobDescription,
              jobExperience: experience,
              jsonMockResp: JSON.stringify(MockJsonResponse),
            })
    
            if (response) {
              router.push(`/dashboard/interview/${response}`)
            } else {
              console.error('Failed to save interview')
            }
          }
        } catch (error) {
          console.error('Error occurred while processing the interview data:', error)
        } finally {
          setJobPosition('')
          setJobDescription('')
          setExperience('')
          setLoading(false)
        }
      }


    return (
        <div>
        <div className='' onClick={() => setOpenAddNewInterview(!openAddNewInterview)}>
            <h1 className=' text-3xl font-bold'>Create your interview</h1>
            <Button variant='neutral'>Add new</Button>
        </div>

        <Dialog open={openAddNewInterview}>
            <DialogContent className="sm:max-w-[825px]">
            <DialogHeader>
                <DialogTitle className='text-3xl font-bold'>Tell us more about the job you are interviewing for.</DialogTitle>
                <DialogDescription className='text-sm font-medium'>
                Provide details about the job you&apos;re interviewing for.
                </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4">
                <div className="flex flex-col gap-2">
                <Label htmlFor="role">
                    Job Position/Role
                </Label>
                <Input
                    id="role"
                    placeholder="e.g., Frontend Developer"
                    value={jobPosition}
                    onChange={(e) => setJobPosition(e.target.value)}
                />
                </div>
                <div className="flex flex-col gap-2">
                <Label htmlFor="tech-stack">
                    Tech Stack
                </Label>
                <Input
                    id="tech-stack"
                    placeholder="e.g., React, TypeScript, TailwindCSS"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                />
                </div>
                <div className="flex flex-col gap-2">
                <Label htmlFor="experience">
                    Years of Experience
                </Label>
                <Input
                    id="experience"
                    placeholder="e.g., 3 years"
                    type="number"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                />
                </div>
            </div>
            <DialogFooter className="flex justify-end gap-2">
                <Button variant='neutral' onClick={() => setOpenAddNewInterview(false)}>Cancel</Button>
                <Button className='bg-blue-400' type="button" onClick={handleSubmit}>{loading && 'Loading...'} Start Interview</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
        </div>
    )
}

export default AddNewInterview
