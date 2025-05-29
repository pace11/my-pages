'use client'

import React from 'react'
import { Typography, Button } from '@material-tailwind/react'

export default function ContactMe() {
  return (
    <section className="px-8 pt-60">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography {...({} as any)} variant="h2" color="blue-gray" className="mb-4 text-4xl">
            Contact Me
          </Typography>
          <Typography {...({} as any)} variant="lead" className="mx-auto mb-4 w-full !text-gray-500 lg:w-5/12">
            {`If you're interested in a potential collaboration to develop an application together, I'd be glad to discuss
            further. Please don't hesitate to get in touch`}
          </Typography>
          <a href="mailto:rppratama1771@gmail.com?subject=Collaboration%20Opportunity&body=Hi,%20I%20am%20interested%20in%20collaborating%20with%20you.">
            <Button {...({} as any)}>Contact via Email</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
