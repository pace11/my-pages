import React from 'react'
import Image from 'next/image'
import { Typography, Card, CardBody, CardHeader, Button, Chip } from '@material-tailwind/react'

interface ProjectCardProps {
  img: string
  title: string
  desc: string
  topics: string[]
  projectUrl?: string
  previewUrl?: string
}

export function ProjectCard({ img, title, desc, topics, previewUrl, projectUrl }: ProjectCardProps) {
  return (
    <>
      <Card {...({} as any)} color="tr" shadow={false}>
        <CardHeader {...({} as any)} floated={false} className="mx-0 mt-0 mb-4 h-64">
          <Image width={480} height={480} src={img} alt={title} className="h-full w-full object-contain" />
        </CardHeader>
        <CardBody {...({} as any)} className="p-0">
          <Typography {...({} as any)} variant="h5" className="mb-2">
            {title}
          </Typography>
          <Typography {...({} as any)} className="mb-6 font-normal !text-gray-500">
            {desc}
          </Typography>
          <div className="flex flex-wrap gap-2 mb-6">
            {topics?.map((topic) => <Chip key={topic} variant="ghost" value={topic} />) || null}
          </div>
          <div className="flex flex-wrap gap-2">
            {projectUrl ? (
              <a href={projectUrl} target="_blank">
                <Button {...({} as any)} color="gray" size="sm">
                  Github
                </Button>
              </a>
            ) : null}
            {previewUrl ? (
              <a href={previewUrl} target="_blank">
                <Button {...({} as any)} color="green" size="sm">
                  Preview
                </Button>
              </a>
            ) : null}
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default ProjectCard
