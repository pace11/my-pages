import React from 'react'
import Image from 'next/image'
import { Typography, Card, CardBody, CardHeader, Button, Chip } from '@material-tailwind/react'
import { formatDistance } from 'date-fns'

export function ArticleCard({ data, handleReadMore }: { data?: any; handleReadMore: (url: string) => void }) {
  return (
    <>
      <Card {...({} as any)} color="tr" shadow={false}>
        <CardHeader {...({} as any)} floated={false} className="mx-0 mb-4 h-48">
          <Image
            width={480}
            height={480}
            src="/image/articles.jpg"
            alt="article-img"
            className="h-full w-full object-center"
          />
        </CardHeader>
        <CardBody {...({} as any)} className="p-0">
          <Typography {...({} as any)} variant="h5" className="mb-2 text-left">
            {data?.title || ''}
          </Typography>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Image
              width={20}
              height={20}
              src={data?.createdBy?.avatarUrl || ''}
              alt="author-picture"
              className="rounded-2xl"
            />
            <Typography {...({} as any)} variant="paragraph" className="text-xs font-normal">
              {data?.createdBy?.name ? String(data?.createdBy?.name).split(' ')[1] : ''}
              <span className="italic">
                {` (${data?.updatedAt ? 'edited, ' : ''}${formatDistance(
                  new Date(data?.updatedAt ? data?.updatedAt : data?.createdAt),
                  new Date(),
                  {
                    addSuffix: true,
                  },
                )})`}
              </span>
            </Typography>
          </div>
          <div
            {...({} as any)}
            className="mb-4 font-normal text-sm text-left !text-gray-500 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: data?.text || '' }}
          />
          <Button
            {...({} as any)}
            onClick={() =>
              handleReadMore(`${process.env.NEXT_PUBLIC_ARTICLE_URL}/s/${process.env.NEXT_PUBLIC_SHARE_ID}${data?.url}`)
            }
            color="gray"
            size="sm"
          >
            Read More
          </Button>
        </CardBody>
      </Card>
    </>
  )
}

export default ArticleCard
