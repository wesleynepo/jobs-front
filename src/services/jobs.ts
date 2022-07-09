import { axiosZippia } from './axios-zippia'
import { ZippiaJobsResponse } from './dtos/jobs-response'

export const jobs = async (): Promise<ZippiaJobsResponse> => {
  const { data } = await axiosZippia.post('/jobs', {
    companySkills: true,
    dismissedListingHashes: [],
    fetchJobDesc: true,
    locations: [],
    numJobs: 20,
    jobTitle: 'Business Analyst',
    previousListingHashes: [],
  })
  return data
}
