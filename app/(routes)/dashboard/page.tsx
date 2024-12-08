"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Users2, ChevronRight, Star } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaAward } from 'react-icons/fa'

const Dashboard = () => {
  
  const router = useRouter();
  return (
    <>
      <div className='flex flex-col items-center h-[80vh] space-y-4'>
        <Skeleton className='h-8 w-full' />
        <div className="flex flex-1 flex-col justify-center gap-2 items-center">
          <div className='flex flex-col items-center'>
            <FaAward size={'8rem'} />
            <div className="text-center flex items-center gap-2 pt-2">
              <div className="text-4xl font-semibold">
                {(10000).toLocaleString()}
              </div>
              <div className="text-base uppercase">perks</div>
            </div>
          </div>
          <p className='text-sm'>
            Golden Perk Level
          </p>
        </div>
        <div className=" btns-con w-full">
          <Card className="btn-item comunity shine-effect bg-background">
            <Button onClick={() => window.location.href = 'https://t.me/perkscommunity'} variant="nav" className="w-full justify-between p-4 text-base">
              <span className="flex items-center gap-3">
                <Users2 />
                Join our community
              </span>
              <ChevronRight />
            </Button>
          </Card>
          <Card className="btn-item comunity bg-black">
            <Button onClick={() => router.push("/tasks")} variant={'nav'} className="w-full justify-between p-4 text-base">
              <span className="flex items-center gap-3">
                <Star />
                Check your rewards
              </span>
              <ChevronRight />
            </Button>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Dashboard