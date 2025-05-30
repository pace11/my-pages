'use client'

import Image from 'next/image'
import { Typography, Card, CardBody, Button } from '@material-tailwind/react'
import Link from 'next/link'

function CourseDetail() {
  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        <Card {...({} as any)} color="transparent" shadow={false} className="">
          <CardBody
            {...({} as any)}
            className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4"
          >
            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
              <Image
                width={768}
                height={768}
                src="/image/nextjs-course.png"
                alt="testimonial image"
                className="w-full h-full scale-110 object-cover"
              />
            </div>
            <div className="col-span-2 w-full">
              <Typography {...({} as any)} variant="h6" color="blue" className="mb-4">
                ONLINE COURSE
              </Typography>
              <Typography {...({} as any)} variant="h3" color="blue-gray" className="mb-4 font-bold hover:underline">
                <Link href="https://sanbercode.com/bootcamp/next-js" target="_blank">
                  Full-Stack Next.js
                </Link>
              </Typography>
              <Typography {...({} as any)} className="mb-1 w-full font-normal !text-gray-500">
                {`Next.js is a powerful React framework that enables developers to build fast, user-friendly web
                applications with features like server-side rendering (SSR), static site generation (SSG), and API
                routes out of the box. It simplifies routing, optimizes performance, and supports full-stack
                capabilities, making it ideal for modern web development—whether you're building marketing sites, blogs,
                dashboards, or fully dynamic applications.`}
              </Typography>
              <div className="flex items-center mt-8 gap-4">
                <Link href="https://sanbercode.com/bootcamp/next-js" target="_blank">
                  <Button {...({} as any)} color="gray">
                    detail course
                  </Button>
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  )
}

export default CourseDetail
