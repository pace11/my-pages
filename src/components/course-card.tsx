import { Typography, Card, CardBody, CardHeader, Button } from '@material-tailwind/react'
import Image from 'next/image'

interface CourseCardProps {
  img: string
  tag: string
  title: string
  desc: string
  label: string
}

export function CourseCard({ img, tag, title, desc, label }: CourseCardProps) {
  return (
    <>
      {/* @ts-expect-error */}
      <Card className="border">
        {/* @ts-expect-error */}
        <CardHeader className="h-64">
          <Image width={768} height={768} src={img} alt={title} className="h-full w-full object-cover scale-[1.1]" />
        </CardHeader>
        {/* @ts-expect-error */}
        <CardBody>
          <div className="flex items-center gap-2">
            {/* @ts-expect-error */}
            <Typography variant="small" color="blue" className="mb-2 font-normal text-gray-500">
              {tag}
            </Typography>
          </div>
          <a href="#" className="text-blue-gray-900 transition-colors hover:text-gray-900">
            {/* @ts-expect-error */}
            <Typography variant="h5" className="mb-2 normal-case">
              {title}
            </Typography>
          </a>
          {/* @ts-expect-error */}
          <Typography className="mb-6 font-normal !text-gray-500">{desc}</Typography>
          {/* @ts-expect-error */}
          <Button variant="outlined">{label}</Button>
        </CardBody>
      </Card>
    </>
  )
}

export default CourseCard
