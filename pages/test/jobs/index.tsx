import { Center, Stack, VStack } from '@chakra-ui/react'
import { InferGetServerSidePropsType } from 'next'
import React, { useState } from 'react'
import { CardJob } from '../../../src/components/CardJob'
import { ListButton } from '../../../src/components/ListButton'
import { jobs } from '../../../src/services/jobs'

const SEVEN_DAYS_IN_MILISECONDS = 7 * 24 * 60 * 60 * 1000

export async function getServerSideProps() {
  const availableJobs = await jobs()

  return {
    props: {
      availableJobs,
    },
  }
}

function Jobs({ availableJobs }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [showJobs, setShowJobs] = useState(availableJobs.jobs.slice(0, 9))

  const orderByCompanyName = () => {
    setShowJobs(availableJobs.jobs.sort((a, b) => a.companyName.localeCompare(b.companyName)))
  }

  const filterLastSevenDays = () => {
    setShowJobs(availableJobs.jobs.filter(job => {
      const posted = new Date(job.postingDate)
      const diff = Date.now() - posted.getTime()

      return diff < SEVEN_DAYS_IN_MILISECONDS
    }))
  }

  return (
    <Center flexDir="column" >
      <Stack direction={{base: 'column', md: 'row'}} width={{base: '100%', md:'75%'}} m="1" justifyContent="space-between">
        <ListButton onClick={orderByCompanyName} label="Order by company name" />
        <ListButton onClick={filterLastSevenDays} label="Show last 7 days published" />
      </Stack>
      <VStack width={{base: '100%', md:'75%'}}>
        {showJobs.map((job, index) => <CardJob key={index} company={job.companyName} title={job.jobTitle} logoUrl={job.companyLogo} shortDescription={job.snippets[0]} />)}
      </VStack>
    </Center>
  )
}

export default Jobs
