import React from 'react'

import { Typography, Card, CardBody, Avatar, Rating } from '@material-tailwind/react'

interface FeedbackCardProps {
  img: string
  feedback: string
  client: string
  title: string
}

export function FeedbackCard({ img, feedback, client, title }: FeedbackCardProps) {
  return (
    <>
      {/* @ts-expect-error */}
      <Card shadow={false} className="items-start text-left">
        {/* @ts-expect-error */}
        <CardBody>
          {/* @ts-expect-error */}
          <Avatar src={img} className="mb-2" alt={client} size="xl" />
          {/* @ts-expect-error */}
          <Typography variant="h6" color="blue-gray">
            {client}
          </Typography>
          {/* @ts-expect-error */}
          <Typography variant="small" color="blue-gray" className="mt-1 mb-5 block font-normal">
            {title}
          </Typography>
          {/* @ts-expect-error */}
          <Typography variant="paragraph" className="mb-6 font-normal text-gray-500">
            &quot;{feedback}&quot;
          </Typography>
          {/* @ts-expect-error */}
          <Rating value={5} readonly />
        </CardBody>
      </Card>
    </>
  )
}
export default FeedbackCard
