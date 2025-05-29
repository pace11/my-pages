'use client'

import Image from 'next/image'
import { Button, Typography, Card } from '@material-tailwind/react'
import Link from 'next/link'

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10">
      <Image
        width={1200}
        height={1200}
        src="/image/image8.svg"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card
            {...({} as any)}
            className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7"
          >
            <Typography
              {...({} as any)}
              variant="h1"
              color="blue-gray"
              className="text-xl lg:text-4xl !leading-snug lg:max-w-3xl"
            >
              {`Hi, I'm Muhammad Iriansyah 👋`}
            </Typography>
            <Typography
              {...({} as any)}
              variant="h1"
              color="blue-gray"
              className="text-md lg:text-2xl !leading-snug lg:max-w-3xl"
            >
              Software Engineer, Frontend mentor @sanbercode 🖥️
            </Typography>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-6 lg:mt-4">
              <Link href="https://www.linkedin.com/in/muhammad-iriansyah-putra-pratama-a0120514b/" target="_blank">
                <img
                  alt="gege"
                  src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                  className="w-full h-auto"
                />
              </Link>
              <Link href="https://github.com/pace11" target="_blank">
                <img
                  alt="gege"
                  src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                  className="w-full h-auto"
                />
              </Link>
            </div>
            <Typography {...({} as any)} className="font-normal mb-10 mt-6 !text-gray-600 hidden md:block">
              {`👋 Hey! I'm a software engineer who enjoys building fast, scalable, and reliable applications mostly using
              Next.js, TypeScript, Node.js, and sometimes Golang for backend services. I love turning ideas into clean
              code and intuitive user experiences.`}{' '}
              <br />
              <br />
              {`💻 I currently work full-time as a software engineer, and on the side, I share what I know as a freelance
              trainer, helping others get started or grow in web development. Always learning, always shipping, and
              always up for solving real problems with code.`}
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start mt-8 lg:mt-0">
              <Link href="https://sanbercode.com/bootcamp/next-js" target="_blank">
                <Button {...({} as any)} color="gray">
                  view my course
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
export default Hero
