'use client'

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from '@material-tailwind/react'

export function WorkHistory() {
  const JOBS = [
    {
      role: 'Instructor',
      company: 'Sanbercode',
      active: 'current',
      job_details: ['Class Next.js, Frontend Development'],
    },
    {
      role: 'Mid Frontend Engineer',
      company: 'Efishery',
      active: 'Mar 2022 - Feb 2025',
      job_details: [
        'Served as an Individual Contributor in the Engineering Team, actively involved in end-to-end feature development and technical decision-making',
        'Developed an internal dashboard using Next.js, Zustand, and a customized Ant Design system to enhance usability and performance',
        'Designed and maintained CI/CD pipelines to automate and streamline the application deployment process',
        'Enforced code quality standards by integrating SonarQube for static analysis and continuous improvement',
        'Implemented monitoring and observability using Sentry, enabling early detection of issues and improved system reliability',
        'Contributed to the revamp of the GraphQL schema in the Nubitools App by integrating a newly designed service API to improve scalability and maintainability',
        'Conducted R&D on GraphQL Mesh to simplify data fetching and enhance the frontend development experience across teams',
        'Collaborated with the E-Mall team to develop a user-centric shopping application focused on usability and performance',
        'Developed a new Golang-based API endpoint for the Kabayan Service to retrieve a structured list of user reward points',
        'Led the digitization of manual workflows by building an internal dashboard that streamlined operational processes and improved data accessibility for internal teams',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Female Daily Network',
      active: 'Jan 2020 - Maret 2022',
      job_details: [
        'Revamped the Single Sign-On (SSO) system for Female Daily Network using Next.js and React.js, working closely with Backend Engineers, Mobile Developers, UI Designers, Product Managers, and cross-functional teams.',
        'Collaborated with the frontend team to build a Monorepo of reusable components and utilities using Lerna, improving scalability and consistency across applications.',
        'Developed an internal User Dashboard application for business teams using Next.js, Ant Design, Hooks, Styled JSX, and Redux with Saga, focusing on user experience and functionality.',
        'Contributed to the performance optimization and maintenance of multiple frontend applications across Female Daily Networks ecosystem.',
        'Wrote and maintained CI/CD pipelines to automate deployments for staging and production environments.',
        'Led the frontend development of Beauty Studio, a new e-commerce platform under Female Daily Network, built from scratch using Next.js, Redux, and adaptive component design while managing and mentoring a team of 3 frontend engineers.',
      ],
    },
    {
      role: 'Software Engineer, Frontend',
      company: 'Ralali.com',
      active: 'Mar 2019 - Dec 2019',
      job_details: [
        'Collaborated with the team to build mobile-first web applications and a comprehensive UI Kit using React.js, ensuring consistency across products.',
        'Developed and documented reusable components using Storybook.js, improving design-system adoption and developer efficiency.',
        'Led the design revamp of the Seller Page in Ralali.com CMS, enhancing user experience and aligning the interface with updated brand guidelines.',
      ],
    },
    {
      role: 'Web Developer',
      company: 'DISITU',
      active: 'Sep 2018 - Feb 2019',
      job_details: [
        'Contributed to the improvement of Disitu.com, focusing on performance, usability, and code maintainability.',
        'Responsible for maintaining and updating key product pages, including Kredit Tanpa Agunan and Kredit Multiguna, ensuring content accuracy and technical stability.',
        'Actively involved in the development lifecycle by writing clean, maintainable code, debugging and fixing issues, and reviewing code contributions from other team members to uphold code quality standards.',
      ],
    },
    {
      role: 'IT Internship',
      company: 'LokadataID',
      active: 'Jan 2018 - Mar 2018',
      job_details: [
        'Worked as a Frontend Engineer to develop a draggable layout interface for managing file uploads using Angular, enhancing user interaction and flexibility.',
        'Took on the role of Backend Engineer, building API endpoints using Lumen, a lightweight microframework from Laravel, to support backend services.',
        'Gained foundational knowledge in Text Mining by exploring various techniques using Python, and implementing experiments through Jupyter Notebook for data analysis and prototyping.',
      ],
    },
  ]

  return (
    <section className="px-8 pt-48" id="work">
      <div className="container mx-auto mb-24 text-center">
        <Typography {...({} as any)} variant="h2" color="blue-gray">
          Work History
        </Typography>
        <Typography
          {...({} as any)}
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Possess 5+ years of experience as a Software Engineer, Frontend Engineer, contributing to various projects and
          technologies.
        </Typography>
      </div>
      <div className="container mx-auto">
        <Timeline>
          {JOBS?.map((job, index) => (
            <TimelineItem key={index}>
              {index + 1 < JOBS.length && <TimelineConnector />}
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <Typography {...({} as any)} variant="h6" color="blue-gray" className="leading-none text-xl">
                  {`${job.role}, ${job.company}, (${job.active})`}
                </Typography>
              </TimelineHeader>
              <TimelineBody>
                <ul className="list-disc pb-10 p-6">
                  {job?.job_details?.map((el, idx) => (
                    <li key={idx}>
                      <Typography {...({} as any)} className="font-normal text-gray-600">
                        {el}
                      </Typography>
                    </li>
                  )) || null}
                </ul>
              </TimelineBody>
            </TimelineItem>
          )) || null}
        </Timeline>
      </div>
    </section>
  )
}

export default WorkHistory
