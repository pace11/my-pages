'use client'

import React from 'react'
import { Typography } from '@material-tailwind/react'
import { UserGroupIcon, PlayCircleIcon, StarIcon } from '@heroicons/react/24/solid'

import StatsCard from '@/components/stats-card'

const STATS = [
  {
    icon: UserGroupIcon,
    count: '200+',
    title: 'Mentee',
  },
  {
    icon: PlayCircleIcon,
    count: 'Materials',
    title: 'Articles & Videos',
  },
  {
    icon: StarIcon,
    count: '4.3 / 5',
    title: 'Rating',
  },
]

export function CourseStats() {
  return (
    <section className="px-8 pt-48" id="my-course">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography {...({} as any)} variant="h2" color="blue-gray" className="mb-2 text-4xl">
            {`My Course Stats`}
          </Typography>
          <Typography {...({} as any)} variant="lead" className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12">
            {`Learn online from anywhere, with mentorship for 4 weeks`}
          </Typography>
        </div>
        <div className="grid gap-y-16 gap-x-10 md:grid-cols-3 lg:grid-cols-3">
          {STATS?.map((props, key) => <StatsCard key={key} {...props} />) || null}
        </div>
      </div>
    </section>
  )
}
export default CourseStats
