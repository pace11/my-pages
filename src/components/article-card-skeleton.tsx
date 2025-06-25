import React from 'react'
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'

export function ArticleCardSkeleton() {
  return (
    <>
      <Card {...({} as any)} color="tr" shadow={false} className="animate-pulse">
        <CardHeader {...({} as any)} floated={false} className="mx-0 mb-4 h-48 rounded-lg bg-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-full w-full text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </CardHeader>
        <CardBody {...({} as any)} className="p-0">
          <Typography {...({} as any)} as="div" variant="h1" className="mb-4 h-4 w-full rounded-full bg-gray-300">
            &nbsp;
          </Typography>
          <Typography {...({} as any)} as="div" variant="h1" className="mb-4 h-4 w-56 rounded-full bg-gray-300">
            &nbsp;
          </Typography>
        </CardBody>
      </Card>
    </>
  )
}

export default ArticleCardSkeleton
