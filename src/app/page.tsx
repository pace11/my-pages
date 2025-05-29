import Navbar from '@/components/navbar'

import Hero from '@/components/section/hero'
import ContactMe from '@/components/section/contact-me'
import WorkHistory from '@/components/section/work-history'
import CourseStats from '@/components/section/course-stats'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ContactMe />
      <WorkHistory />
      <CourseStats />
    </>
  )
}
