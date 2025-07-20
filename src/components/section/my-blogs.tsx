'use client'

import React from 'react'
import { Typography, Dialog, DialogBody } from '@material-tailwind/react'
import ArticleCard from '@/components/article-card'
import { fetcher } from '../../../utils'
import useSWR from 'swr'
import { useState } from 'react'
import ArticleCardSkeleton from '../article-card-skeleton'

export function MyBlogs() {
  const { data: articles, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/articles`, fetcher)
  const [detail, setDetail] = useState('')

  const handleModal = () => setDetail('')

  return (
    <section className="px-8 pt-8">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography {...({} as any)} variant="h2" color="blue-gray" className="mb-2 text-4xl">
            My Blogs
          </Typography>
          <Typography {...({} as any)} variant="lead" className="mx-auto mb-6 w-full !text-gray-500 lg:w-5/12">
            Just some ideas I jotted down, now shared for anyone who might need them
          </Typography>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-3 xl:grid-cols-4 p-2">
          {isLoading && [...Array(3).keys()].map((index) => <ArticleCardSkeleton key={String(index)} />)}
          {(!isLoading &&
            articles?.data?.map((article: any, index: any) => (
              <ArticleCard key={String(index)} data={article} handleReadMore={(url) => setDetail(url)} />
            ))) ||
            null}
        </div>
      </div>
      <Dialog {...({} as any)} open={!!detail} handler={handleModal} className="w-full">
        <DialogBody {...({} as any)} className="overflow-y-auto py-4">
          <iframe src={detail} className="w-full h-[80vh]" />
        </DialogBody>
      </Dialog>
    </section>
  )
}
export default MyBlogs
