'use client'

import React from 'react'
import { Typography, Tabs, Tab, TabsHeader, TabsBody, TabPanel } from '@material-tailwind/react'
import ProjectCard from '@/components/project-card'
import dataProject from '../../../data/projects.json'

export function MyProjects() {
  const projects = dataProject.items

  return (
    <section className="px-8 pt-48" id="project">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography {...({} as any)} variant="h2" color="blue-gray" className="mb-2 text-4xl">
            My Projects
          </Typography>
          <Typography {...({} as any)} variant="lead" className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12">
            Here are some of the projects I have worked on built to learn, experiment, and solve real problems with
            clean design and modern tools. Feel free to check them out!
          </Typography>
        </div>
        <Tabs value={projects[0].key}>
          <TabsHeader {...({} as any)} onChange={(val) => console.log('value => ', val)}>
            {projects?.map(({ key }) => (
              <Tab {...({} as any)} key={key} value={key} className="capitalize">
                {String(key).replaceAll('-', ' ')}
              </Tab>
            )) || null}
          </TabsHeader>
          <TabsBody {...({} as any)}>
            {projects?.map(({ key, projects }) => (
              <TabPanel key={key} value={key}>
                <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 p-10">
                  {projects?.map((project, index) => (
                    <ProjectCard
                      key={String(index)}
                      img={project.image_url}
                      title={project.title}
                      desc={project.description}
                      topics={project.topics}
                      projectUrl={project.repository_url}
                      previewUrl={project.preview_url}
                    />
                  )) || null}
                </div>
              </TabPanel>
            )) || null}
          </TabsBody>
        </Tabs>
      </div>
    </section>
  )
}
export default MyProjects
